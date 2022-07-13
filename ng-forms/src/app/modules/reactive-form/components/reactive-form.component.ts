import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
  FormArray,
} from '@angular/forms';
import { CepService } from '@core/services/cep.service';
import { EmailValidationService } from '@core/services/email-validation.service';

import { BaseFormComponent } from '@core/utils/base-form.component';
import { FormValidators } from '@core/validators/form.validators';
import {
  distinctUntilChanged,
  EMPTY,
  map,
  Subject,
  switchMap,
  take,
  takeUntil,
  zip,
} from 'rxjs';
import { City } from '../models/city.model';
import { Newsletter } from '../models/newsletter.model';
import { Position } from '../models/positions.model';
import { State } from '../models/state.mode';
import { Technologies } from '../models/technologies.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent
  extends BaseFormComponent
  implements OnInit, OnDestroy
{
  public states: State[] = [];
  public cities: City[] = [];
  public positions: Position[] = [];
  public technologies: Technologies[] = [];
  public newsletterOptions: Newsletter[] = [];
  public frameworks = ['Angular', 'React', 'Vue', 'Svelte'];

  private destroyed$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private emailValidation: EmailValidationService,
    private cepService: CepService
  ) {
    super();
  }

  get frameworksControls() {
    return this.form.get('frameworks')
      ? (this.form.get('frameworks') as FormArray).controls
      : [];
  }

  public submit(): void {
    const payload = {
      ...this.form.value,
      frameworks: this.form.value.frameworks
        .map((framework: boolean, index: number) =>
          framework ? this.frameworks[index] : null
        )
        .filter((value: string | null) => value !== null),
    };

    this.apiService.saveData(payload).subscribe({
      next: (data) => {
        console.log('Data has been saved', data);
      },
      error: () => {
        alert('Error');
      },
    });
  }

  public ngOnInit(): void {
    this.initForm();

    zip([
      this.apiService.getCities(),
      this.apiService.getStates(),
      this.apiService.newsletter$,
      this.apiService.positions$,
      this.apiService.technologies$,
    ])
      .pipe(take(1))
      .subscribe(([cities, states, newsletter, positions, technologies]) => {
        this.cities = cities;
        this.states = states;
        this.newsletterOptions = newsletter;
        this.positions = positions;
        this.technologies = technologies;
      });

    this.form
      .get('address.cep')
      ?.statusChanges.pipe(
        distinctUntilChanged(),
        switchMap((status) =>
          status === 'VALID'
            ? this.cepService.getCep(this.form.get('address.cep')?.value)
            : EMPTY
        ),
        takeUntil(this.destroyed$)
      )
      .subscribe((data) => {
        this.fillAddressFields(data);
      });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public initForm(): void {
    this.form = this.fb.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(35),
        ],
      ],
      email: [
        null,
        [Validators.required, Validators.email],
        [this.validateEmail.bind(this)],
      ],
      confirmEmail: [null, FormValidators.equalsTo('email')],
      address: this.fb.group({
        cep: [null, [Validators.required, FormValidators.cepValidator]],
        number: [null],
        complement: [null, Validators.required],
        street: [null, Validators.required],
        neighborhood: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
      }),
      position: [null],
      technologies: [null],
      newsletter: ['n'],
      terms: [false, Validators.pattern('true')],
      frameworks: this.buildFrameworksControls(),
    });
  }

  private buildFrameworksControls() {
    const controls = this.frameworks.map(() => new FormControl(false));
    return this.fb.array(controls);
  }

  private validateEmail(formControl: FormControl) {
    return this.emailValidation
      .getEmailValidity(formControl.value)
      .pipe(map((hasEmail) => (hasEmail ? { invalidEmail: true } : null)));
  }

  private fillAddressFields(data: any) {
    this.form.get('address')?.patchValue({
      street: data.logradouro,
      complement: data.complemento,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
    });
  }
}

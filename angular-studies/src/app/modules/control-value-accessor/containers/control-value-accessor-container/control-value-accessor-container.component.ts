import { GalaxyService } from './../../services/galaxy.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-control-value-accessor-container',
  templateUrl: './control-value-accessor-container.component.html',
  styleUrls: ['./control-value-accessor-container.component.scss']
})
export class ControlValueAccessorContainerComponent implements OnInit {
  form: FormGroup;
  galaxies$: Observable<{ id: number; name: string; }[]>;

  constructor(private galaxyService: GalaxyService) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      rating: new FormControl({ value: null, disabled: true }),
      name: new FormControl({ value: null }),
      galaxy: new FormControl({ value: null, disabled: true }),
    });

    this.galaxies$ = this.galaxyService.getGalaxies();
  }

  onSubmit() {
    console.log(this.form.value);
  }

}

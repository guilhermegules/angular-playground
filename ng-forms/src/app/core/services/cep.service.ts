import { Cep } from './../models/cep.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  public getCep(cep: string) {
    const formattedCep = cep.replace(/\D/g, '');

    if (formattedCep === '') return EMPTY;

    const validateCepRegex = /^[0-9]{8}$/;

    if (!validateCepRegex.test(formattedCep)) return EMPTY;

    return this.http.get<Cep>(`//viacep.com.br/ws/${cep}/json`);
  }
}

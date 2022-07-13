import { City } from './../models/city.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Newsletter } from '../models/newsletter.model';
import { Position, PositionLevelEnum } from '../models/positions.model';
import { State } from '../models/state.mode';
import { Technologies } from '../models/technologies.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get positions$(): Observable<Position[]> {
    return of([
      { name: 'Dev', level: PositionLevelEnum.JUNIOR, description: 'Dev Jr' },
      {
        name: 'Dev',
        level: PositionLevelEnum.MID_LEVEL,
        description: 'Dev Pl',
      },
      { name: 'Dev', level: PositionLevelEnum.SENIOR, description: 'Dev Sr' },
    ]);
  }

  get technologies$(): Observable<Technologies[]> {
    return of([
      { name: 'java', description: 'Java' },
      { name: 'javascript', description: 'JavaScript' },
      { name: 'typescript', description: 'TypeScript' },
      { name: 'rxjs', description: 'RxJS' },
      { name: 'ruby', description: 'Ruby' },
    ]);
  }

  get newsletter$(): Observable<Newsletter[]> {
    return of([
      { value: 'y', description: 'Yes' },
      { value: 'n', description: 'No' },
    ]);
  }

  public getStates(): Observable<State[]> {
    return this.http.get<State[]>('/assets/api/states.json');
  }

  public getCities(): Observable<City[]> {
    return this.http.get<City[]>('/assets/api/cities.json');
  }

  public saveData(payload: any) {
    return this.http.post('https://httpbin.org/post', payload);
  }
}

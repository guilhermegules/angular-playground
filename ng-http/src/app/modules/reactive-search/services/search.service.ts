import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CdnLibrary } from '../models/library-search.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  private readonly FIELDS = 'name,description,version,homepage';

  constructor(private http: HttpClient) {}

  public getSearchValues(search: string): Observable<CdnLibrary> {
    const params = new HttpParams()
      .set('fields', this.FIELDS)
      .set('search', search);
    return this.http.get<CdnLibrary>(this.SEARCH_URL, { params });
  }
}

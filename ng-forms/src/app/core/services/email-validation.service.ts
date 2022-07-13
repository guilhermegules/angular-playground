import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

interface EmailResponse {
  emails: Array<{ email: string }>;
}

@Injectable({
  providedIn: 'root',
})
export class EmailValidationService {
  constructor(private http: HttpClient) {}

  public getEmailValidity(email: string) {
    return this.http.get<EmailResponse>('assets/validation/emails.json').pipe(
      delay(1500),
      map(({ emails }) =>
        emails.filter((apiEmail) => apiEmail.email === email)
      ),
      map((emails) => emails.length > 0)
    );
  }
}

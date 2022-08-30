import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { FileUrl } from '../models/file.model';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient) {}

  public upload(files: Set<File>): Observable<HttpEvent<Object>> {
    const formData = new FormData();

    files.forEach((file) => formData.append('file', file, file.name));

    return this.http.post(`${environment.BASE_URL}/upload`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }

  public download(filename: string): Observable<Blob> {
    const params = new HttpParams().set('filename', filename);

    return this.http.get(`${environment.BASE_URL}/download`, {
      responseType: 'blob',
      params,
    });
  }

  public handleFile(blob: Blob): FileUrl {
    const blobObject = new Blob([blob], {
      type: blob.type,
    });

    const fileUrl = URL.createObjectURL(blobObject);

    return {
      fileUrl,
    };
  }
}

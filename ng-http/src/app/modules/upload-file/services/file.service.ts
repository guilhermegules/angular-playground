import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient) {}

  public upload(files: Set<File>) {
    const formData = new FormData();

    files.forEach((file) => formData.append('file', file, file.name));

    return this.http.post(`${environment.BASE_URL}/upload`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }

  public downloadExcel() {
    return this.http.get(`${environment.BASE_URL}/download/excel`, {
      responseType: 'blob',
    });
  }

  public downloadPdf() {
    return this.http.get(`${environment.BASE_URL}/download/pdf`, {
      responseType: 'blob',
    });
  }

  public handleFile(blob: Blob) {
    const blobObject = new Blob([blob], {
      type: blob.type,
    });

    const fileUrl = URL.createObjectURL(blobObject);

    return {
      fileUrl,
    };
  }
}

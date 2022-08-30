import { HttpEventType } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { tap } from 'rxjs';

export function uploadProgress<T = Object>(
  callback: (progress: number) => void
) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress) {
      callback(Math.round((event.loaded * 100) / (event.total ?? 1)));
    }
  });
}

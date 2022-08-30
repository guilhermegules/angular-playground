import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export default function filterResponse<T = Object>() {
  return pipe(
    filter(({ type }: HttpEvent<T>) => type === HttpEventType.Response),
    map((event: HttpEvent<T>) => (event as HttpResponse<T>).body)
  );
}

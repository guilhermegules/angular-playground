import { HttpEventType, HttpResponse } from '@angular/common/http';
import { pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export default function filterResponse<T = any>() {
  return pipe(
    filter(({ type }: HttpResponse<T>) => type === HttpEventType.Response),
    map(({ body }: HttpResponse<T>) => body)
  );
}

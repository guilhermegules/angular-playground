import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { CdnLibrary, CdnLibraryResult } from '../models/library-search.model';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  public total = 0;
  public cdnList$: Observable<CdnLibraryResult[]> = of([]);
  public searchField = new FormControl('');

  private destroyed$ = new Subject<void>();

  constructor(private searchService: SearchService) {}

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public ngOnInit(): void {
    this.cdnList$ = this.searchField.valueChanges.pipe(
      map((value) => value?.trim()),
      filter((value) => value!.length > 1),
      distinctUntilChanged(),
      debounceTime(200),
      switchMap((search) => this.searchService.getSearchValues(search!)),
      tap((response) => {
        this.total = response.total;
      }),
      map((response) => response.results),
      takeUntil(this.destroyed$)
    );
  }

  public onSearch(): void {
    const value = this.searchField.value;
    if (value && value.trim() !== '') {
      this.cdnList$ = this.searchService.getSearchValues(value).pipe(
        tap((response) => (this.total = response.total)),
        map((response) => response.results)
      );
    }
  }
}

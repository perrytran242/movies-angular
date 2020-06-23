import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject, Observable  } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public searchTerm$ = new Subject<string>();
  public movieList$ = new Subject<any>();
  constructor(
    private http: HttpClient,
  ) { }

  getMovieList(page: number) {
    return this.http.get(`${environment.API_URL}getMovies?page=${page}`);
  }

  searchMovie(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => {
        if (!term) {
          return [];
        }
        this.searchEntries(term);
        return term;
      })
    );
  }

  searchEntries(searchTerm) {
    const payload = { searchTerm };
    return this.http.post(`${environment.API_URL}searchMovies`, payload)
      .subscribe(res => {
        this.movieList$.next(res);
    });
  }
}

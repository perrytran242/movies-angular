import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Injectable({
  providedIn: 'root'
})
export class HeroResolverService implements Resolve<any> {

  constructor(
    private movieService: MovieService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable <any> {
    return this.movieService.getMovieList();
  }
}

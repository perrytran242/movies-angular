import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { HttpClient } from '@angular/common/http';


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
    console.log("ROUTE:", route);
    console.log("STATE:", state);
    return this.movieService.getMovieList();
  }
}

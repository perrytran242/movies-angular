import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movieService.getMovieList()
      .subscribe(res => {
        console.log(res);
      });
  }

}

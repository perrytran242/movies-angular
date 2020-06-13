import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList = [];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(res => {
      this.movieList = res.movie.data.results;
      this.movieList.forEach(movie => {
        movie.poster_path = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
      });
    });

    this.movieService.searchMovie(this.movieService.searchTerm$)
      .subscribe( (searchTerm: string) => {
      });

    this.movieService.movieList$
      .subscribe( movieList => {
        // console.log(movieList);
        const { data: { results } } = movieList;
        this.movieList = results;
        this.movieList.forEach(movie => {
          movie.poster_path = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
        });
      });
  }
}

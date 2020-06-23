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
  pageNumber = 1;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(res => {
      this.movieList = res.movie.data.results;
      this.createMoviePoserPath(this.movieList);
    });

    this.movieService.searchMovie(this.movieService.searchTerm$)
      .subscribe( (searchTerm: string) => {
    });

    this.movieService.movieList$
      .subscribe( movieList => {
        const { data: { results } } = movieList;
        this.movieList = results;
        this.createMoviePoserPath(this.movieList);
      });
  }

  createMoviePoserPath(movies) {
    movies.forEach(movie => {
      movie.poster_path = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
    });
  }

  onNextPage() {
    if (this.pageNumber >= 20) {
      return;
    }
    this.pageNumber++;
    this.updateMovieList(this.pageNumber);
  }

  onBackPage() {
    if (this.pageNumber <= 1) {
      return;
    }
    this.pageNumber--;
    this.updateMovieList(this.pageNumber);
  }

  updateMovieList(pageNumber) {
    this.movieService.getMovieList(pageNumber)
      .subscribe( (movieList: any) => {
        const { data: { results } } = movieList;
        this.movieList = results;
        this.createMoviePoserPath(this.movieList);
      });
  }
}

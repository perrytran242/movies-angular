import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public movieService: MovieService
  ) { }

  ngOnInit() {
    // this.movieService.searchTerm$
    //   .subscribe(searchTerm => {
    //     console.log('searchTerm:', searchTerm);
    //   });
  }

}

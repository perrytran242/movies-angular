import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HeroResolverService } from './resolvers/hero-resolver.service';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: '', component: MovieListComponent, resolve: { movie: HeroResolverService },
  },
  {
    path: 'auth', component: SignUpComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

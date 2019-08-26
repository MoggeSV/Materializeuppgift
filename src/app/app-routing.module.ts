import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeCarouselComponent } from './welcome-carousel/welcome-carousel.component';

const routes: Routes = [
  { path: '', component: WelcomeCarouselComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

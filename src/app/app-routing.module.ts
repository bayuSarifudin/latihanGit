import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: BooksComponent,
  // },
  {
    path: 'book',
    component: BooksComponent,
  },
  {
    path: 'slider',
    component: SliderComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledNonBlocking',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { SliderComponent } from './slider/slider.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, BooksComponent, SliderComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

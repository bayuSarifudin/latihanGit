import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HeloComponent } from './helo/helo.component';
import { NewBrancComponent } from './new-branc/new-branc.component';

@NgModule({
  declarations: [AppComponent, BooksComponent, HeloComponent, NewBrancComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

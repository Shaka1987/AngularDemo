import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TransitionComponent } from './components/transition/transition.component';
import { RequestService } from './services/request.service';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodolistComponent,
    HomeComponent,
    NewsComponent,
    HeaderComponent,
    TransitionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

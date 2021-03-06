import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
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
import { HttpserviceService } from './services/httpservice.service';
import { RequestService } from './services/request.service';
import { StorageService } from './services/storage.service';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductComponent } from './components/product/product.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingComponent } from './components/home/setting/setting.component';
import { PcateComponent } from './components/product/pcate/pcate.component';
import { PlistComponent } from './components/product/plist/plist.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodolistComponent,
    HomeComponent,
    NewsComponent,
    HeaderComponent,
    TransitionComponent,
    FooterComponent,
    NewscontentComponent,
    ProductComponent,
    WelcomeComponent,
    SettingComponent,
    PcateComponent,
    PlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    StorageService,
    RequestService,
    HttpserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

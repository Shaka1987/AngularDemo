import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [
    {path: 'search', component: SearchComponent},
    {path: 'todolist', component: TodolistComponent},
    {path: 'news', component: NewsComponent},
    {path: 'newscontent/:aid', component : NewscontentComponent},
    {path: 'product', component : ProductComponent},
    {path: 'home', component : HomeComponent},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}

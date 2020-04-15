import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SettingComponent } from './components/home/setting/setting.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { NewsComponent } from './components/news/news.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { PcateComponent } from './components/product/pcate/pcate.component';
import { PlistComponent } from './components/product/plist/plist.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TransitionComponent } from './components/transition/transition.component';

const routes: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'todolist', component: TodolistComponent },
    { path: 'news', component: NewsComponent },
    { path: 'newscontent/:aid', component: NewscontentComponent },
    {
        path: 'product', component: ProductComponent,
        children: [
            { path: 'pcate', component: PcateComponent },
            { path: 'plist', component: PlistComponent },
            { path: '**', redirectTo: 'pcate' }
        ]
    },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'welcome', component: WelcomeComponent },
            { path: 'setting', component: SettingComponent },
            { path: '**', redirectTo: 'welcome' }
        ]
    },
    { path: 'transition', component: TransitionComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}

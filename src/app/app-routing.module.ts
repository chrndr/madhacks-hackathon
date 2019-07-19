import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { FaqPage } from './faq/faq.page';

import { SchedulePage } from './schedule/schedule.page';
import { ContactPage } from './contact/contact.page';


const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'faq',
    component: FaqPage,
    loadChildren: './faq/faq.module#FaqPageModule'
  },
  {
    path: 'schedule',
    component: SchedulePage,
    loadChildren: './schedule/schedule.module#SchedulePageModule'
  },
  {
    path: 'contact',
    component: ContactPage,
    loadChildren: './contact/contact.module#ContactPageModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

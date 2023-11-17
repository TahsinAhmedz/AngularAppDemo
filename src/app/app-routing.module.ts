import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';



const appRoutes: Routes = [
  {
    path: 'home',
    component: MainContentComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'details/:slug',
    component: DetailsComponent,
    children: [
      {
        path: ':childSlug',
        component: DetailsComponent
      }
    ]
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

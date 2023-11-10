import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DynamicContentComponent } from './components/dynamic-content/dynamic-content.component';
import { AboutComponent } from './components/about/about.component';
import {MatListModule} from '@angular/material/list';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,
    DynamicContentComponent,
    AboutComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    ScrollingModule,
    MatListModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// const routes: Routes = [
//   { path: 'page-1', component: MainContentComponent },
//   { path: 'page-2', component: MainContentComponent },
// ];

export class AppModule { }

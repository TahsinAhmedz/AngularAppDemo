import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DynamicContentComponent } from './components/dynamic-content/dynamic-content.component';
import { AboutComponent } from './components/about/about.component';
import {MatListModule} from '@angular/material/list';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './store/effects/blog.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,
    DynamicContentComponent,
    AboutComponent,
    SearchFilterPipe,
    DetailsComponent
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
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatListModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([BlogEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// const routes: Routes = [
//   { path: 'page-1', component: MainContentComponent },
//   { path: 'page-2', component: MainContentComponent },
// ];

export class AppModule { }

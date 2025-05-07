import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './gifs/pages/home-page/home-page.component';
import { SearchBoxComponent } from './gifs/components/search-box/search-box.component';
import { GiftListComponent } from './gifs/components/gift-list/gift-list.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  SidebarComponent,
  SearchBoxComponent,
  GiftListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

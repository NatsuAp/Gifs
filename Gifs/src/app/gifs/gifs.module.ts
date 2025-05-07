import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GiftListComponent } from './components/gift-list/gift-list.component';
import { GifsService } from './services/gifs.service';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    GiftListComponent,

  ],
  imports: [
    CommonModule
  ],
  providers: [
    GifsService,
  ],
})
export class GifsModule { }

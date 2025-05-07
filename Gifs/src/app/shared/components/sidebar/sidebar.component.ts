import { Component, ɵɵpureFunction2 } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
constructor(private gifService:GifsService){}

historial(gif:string){
  this.gifService.searchGif(gif)
  
 

  }

get gifs(): string[]{
  return this.gifService.GifHistory
   }






}

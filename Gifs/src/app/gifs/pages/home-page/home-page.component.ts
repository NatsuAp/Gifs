import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
constructor(private GifsService: GifsService){}
get gifs(){
  return this.GifsService.gifListCopy
}

}

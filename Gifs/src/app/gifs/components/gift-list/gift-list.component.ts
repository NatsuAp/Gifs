import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Gif } from '../../Interfaces/gifs.interface';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrl: './gift-list.component.css'
})
export class GiftListComponent {

 @Input()gifs:Gif[]=[]

}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { __values } from 'tslib';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

@ViewChild('dato')
public dato!: ElementRef <HTMLInputElement>
public contador:number = 0
constructor(private gifService:GifsService){}
public nombres:string[]=[]
capturar(gif:string){
const newTag = this.dato.nativeElement.value;
this.nombres.unshift(newTag)
this.contador =this.contador+1
this.gifService.searchGif(newTag)
this.dato.nativeElement.value = ''
console.log(this.nombres)
}

}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../Interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private API : string = '0OiB2q3ib0XOR2HzCvGsSGb9MiFcLpbE'
  private apiUrl:string = 'https://api.giphy.com/v1/gifs'
   //creo el arreglo
    public _gifHistory: string[] = []
    public gifList:Gif[]=[]
  //aqui se llena el arreglo con el dato del input gracias al viewchild
searchGif(gif:string){
  
  if(gif!==""){
    if(this._gifHistory.includes(gif)){
      this._gifHistory=this._gifHistory.filter((x)=>x!==gif)
    }
    this._gifHistory.splice(15, 1)
    this._gifHistory.unshift(gif)
  
  }
  

  //fetch('thtps://api.giphy.com/v1/gifs/search?api_key=0OiB2q3ib0XOR2HzCvGsSGb9MiFcLpbE&q=futbol&limit=10')
  //.then((respuesta)=>respuesta.json())
  //.then((dato)=>(console.log(dato)))

const parametros = new HttpParams()
.set('api_key', this.API)
.set('q', gif)
.set('limit', '10')

 this.http.get<SearchResponse>(`${this.apiUrl}/search?`,{params:parametros})
.subscribe((respuesta)=>{
  this.gifList=respuesta.data
  console.log({gifs: this.gifList})
  })

}
//el arreglo nuevo lleno, es una copia
get GifHistory(){
  return[...this._gifHistory]
}
get gifListCopy(){
  return [...this.gifList]
}


  constructor(private http: HttpClient) { }
}

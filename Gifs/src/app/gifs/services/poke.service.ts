import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../Interfaces/poke.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private apiUrl:string = 'https://pokeapi.co/api/v2/'
 pokeInfo:Pokemon[]=[]

buscadorpokemon(){

  const parametros = new HttpParams()
  .set('pokemon/', gif)


}


  constructor() { }
}

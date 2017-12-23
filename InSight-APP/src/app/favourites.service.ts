import { Appconfig } from './app.config';
import { FavouritesComponent } from './favourites/favourites.component';
import { Favourites } from './favourites';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class FavouritesService 
{
  public set: Favourites;
  public first: string;

  constructor(private http: Http, private config:Appconfig) {}  


  
  getContent(name: string)
  {
      this.first = name;
      
  }

  returnName(): string
  {
    
    return this.first;
    
  }
}
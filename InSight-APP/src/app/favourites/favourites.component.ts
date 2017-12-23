import { RemoveFavService } from './../remove.fav.service';
import { ViewService } from './../view.service';
import { Appconfig } from './../app.config';
import { Http } from '@angular/http';
import { FavouritesService } from './../favourites.service';
import { Favourites } from './../favourites';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  public first: string = "{this.first}";
  public set: Favourites;
  public dots: string = "....";
  public sample: string;
  public limit: number = 200;
  public set1: Favourites;
  public set2: Favourites;
  //public fav_url: string;
  




  constructor(private http: Http,private obj: FavouritesService,private config:Appconfig, private obj1: ViewService, private obj2: RemoveFavService) {
    
   
  }
     fav_url=this.config.apifav_url;
  
  ngOnInit() {
    this.http.get(this.fav_url).subscribe(result => {
      this.set = result.json() as Favourites;
  }, error => console.error(error));

  }

  addDots(con: Favourites) {
    this.sample = con.content;
    if (this.sample.length > this.limit) {
      this.sample = this.sample.substring(0, this.limit) + this.dots;
    }
    return this.sample;
  }

  view(content: Favourites) {
    this.set1 = content;
    this.obj1.show1(this.set1);
  }

  change1(set: Favourites)
  {
    this.set2 = set;
    console.log(this.set2);
    this.obj2.setFavContent1(this.set2);
  }
 
  reload()
  {
    window.location.reload();
  }
 
}

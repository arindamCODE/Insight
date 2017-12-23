import { ContentID } from './../ContentID';
import { RemoveFavService } from './../remove.fav.service';
import { PutFavService } from './../put.fav.service';
import { ViewService } from './../view.service';
import { Content } from './../Content';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

 public con1: ContentID;
  constructor(private obj: ViewService, private obj1: PutFavService, private obj2: RemoveFavService) {
    this.con1 = obj.content;
   }
 
  change()
   {
     this.con1.isFavourites = true;
     this.obj1.putFavContent(this.con1.isFavourites);
   }

   change1()
   {
     this.con1.isFavourites = false;
     this.obj2.putFavContent(this.con1.isFavourites);
   }
  
  ngOnInit() {  
  }
}
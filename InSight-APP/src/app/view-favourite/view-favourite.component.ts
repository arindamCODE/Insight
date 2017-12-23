import { ViewService } from './../view.service';
import { Favourites } from './../favourites';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-favourite',
  templateUrl: './view-favourite.component.html',
  styleUrls: ['./view-favourite.component.css']
})
export class ViewFavouriteComponent implements OnInit {

  public set: Favourites;
  constructor(private obj: ViewService) {
    this.set = obj.set;
  }

  ngOnInit() {

  }

}

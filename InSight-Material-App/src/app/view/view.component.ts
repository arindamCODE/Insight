/* Component to show the entire Content */

import { RemoveFromFavViewComponent } from './../remove-from-fav-view/remove-from-fav-view.component';
import { AddToFavViewComponent } from './../add-to-fav-view/add-to-fav-view.component';
import { ContentID } from './../ContentID';
import { RemoveFavService } from './../remove.fav.service';
import { PutFavService } from './../put.fav.service';
import { ViewService } from './../view.service';
import { Content } from './../Content';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  //Local object to capture the incoming object
  public con1: ContentID;

  constructor(private obj: ViewService,
    private obj1: PutFavService,
    private obj2: RemoveFavService,
    public dialog: MatDialog) {

    //Capturing the incoming object
    this.con1 = obj.content;
  }

/*   change() {
    this.con1.isFavourites = true;
    this.obj1.putFavContent(this.con1.isFavourites);
  }

  change1() {
    this.con1.isFavourites = false;
    this.obj2.putFavContent(this.con1.isFavourites);
  }
 
  openDialogAddFav(): void {
    let dialogRef = this.dialog.open(AddToFavViewComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogRemoveFav(): void {
    let dialogRef = this.dialog.open(RemoveFromFavViewComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  } */

  ngOnInit() {
  }
}
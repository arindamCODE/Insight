import { RemoveFavComponent } from './../remove-fav/remove-fav.component';
//Component to show all the contents that have been marked Favourites by the User

import { ContentID } from './../ContentID';
import { RemoveFavService } from './../remove.fav.service';
import { ViewService } from './../view.service';
import { Appconfig } from './../app.config';
import { Http } from '@angular/http';
import { FavouritesService } from './../favourites.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})

export class FavouritesComponent implements OnInit {

  //URL to capture the address of the API to interact with the Database
  url: string;

  //Local objects of the ContentID model class to capture the incoming objects.
  content: ContentID[];
  content1: ContentID[];
  content2: ContentID[];
  content3: ContentID[];
  content4: ContentID[];

  sample: string; //String to capture the content of the Object
  public limit: number = 500; //To limit the number of characters to show in the context cards
  public dots: string = "...."; //To append at the end of the content if it is longer than the desired limit

  //Local objects of the ContentID model class to perform local operations
  con1: ContentID;
  con2: ContentID;
  confav: ContentID;

  constructor(private appconfig: Appconfig,
    private http: Http,
    private obj1: ViewService,
    private obj2: RemoveFavService,
    public dialog: MatDialog)
  {
    //Getting the required URL from the Appconfig file and assigning to the local variable
    this.url = this.appconfig.editor_url;

    this.getDetails();

    //Get method to obtain the data through the API
   /*  http.get(this.url).subscribe(result => {
      this.content = result.json() as ContentID[];
      this.content1 = this.content.filter(obj => obj.isFavourites == true); // Filtering to show only the contents which are added to the Favourites
      this.content2 = this.content1.reverse(); // Reversing the objects to show the latest one first and so on
      this.content3 = this.content2.filter(obj => obj.createdBy == localStorage.getItem('username')); // Filtering to show the contents specific to the User logged in
      this.content4 = this.content3.filter(obj => obj.isDelete == false); // To show the contents which are not deleted
    }, error => console.error(error)); */
  }

  ngOnInit(){  }

  getDetails()
  {
    this.http.get(this.url).subscribe(result => {
      this.content = result.json() as ContentID[];
      this.content1 = this.content.filter(obj => obj.isFavourites == true); // Filtering to show only the contents which are added to the Favourites
      this.content2 = this.content1.reverse(); // Reversing the objects to show the latest one first and so on
      this.content3 = this.content2.filter(obj => obj.createdBy == localStorage.getItem('username')); // Filtering to show the contents specific to the User logged in
      this.content4 = this.content3.filter(obj => obj.isDelete == false); // To show the contents which are not deleted
    }, error => console.error(error));
  }


  //Function ot append dots at the end of the content if it is exceeding the allowed limit
  addDots(con: ContentID) {
    this.sample = con.content;
    if (this.sample.length > this.limit) {
      this.sample = this.sample.substring(0, this.limit) + this.dots;
    }
    return this.sample;
  }

  //Capturing the particular contentID object and sending it to the ViewService to show the content inside
  view(content: ContentID) {
    this.con1 = content;
    this.obj1.show(this.con1);
  } 

  //Dialog to confirm that the content has been added to the Favourites
  openDialogAddFav(): void {
    let dialogRef = this.dialog.open(RemoveFavComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //Function to add the incoming object to the Favourites
  change1(content: ContentID) {
    this.confav = content; //Capturing the incoming object in the local variable
    this.obj2.setFavContent2(this.confav); //Calling the setFavContent2 function of the PutFavService
    this.getDetails();
  }

  /* 
  change1(con: ContentID) {
    this.con2 = con;
    console.log(this.con2);
    this.obj2.setFavContent1(this.con2);
  } */ 
}

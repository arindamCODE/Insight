//Component of the Dialog that shows that the content has been added to the Favourites

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-to-fav-dialog',
  templateUrl: './add-to-fav-dialog.component.html',
  styleUrls: ['./add-to-fav-dialog.component.css']
})
export class AddToFavDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddToFavDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  //Function that closes the Dialog
  onNoClick(): void {
    this.dialogRef.close();
    //The function below reloads the opened window
    //window.location.reload(); 
  }  
 
  ngOnInit() {
  }

}

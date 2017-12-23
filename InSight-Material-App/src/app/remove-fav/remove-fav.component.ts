/* Dialog that shows up when the content is removed from the Favourites */

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-remove-fav',
  templateUrl: './remove-fav.component.html',
  styleUrls: ['./remove-fav.component.css']
})
export class RemoveFavComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveFavComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  //Function to close the Dialog box
  onNoClick(): void {
    this.dialogRef.close();
    //window.location.reload();
  } 
   
  ngOnInit() {
  }

}
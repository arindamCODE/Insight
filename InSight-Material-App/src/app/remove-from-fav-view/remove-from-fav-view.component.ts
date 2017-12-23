/* Dialog that shows up when the content is removed from the Favourites */

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-remove-from-fav-view',
  templateUrl: './remove-from-fav-view.component.html',
  styleUrls: ['./remove-from-fav-view.component.css']
})
export class RemoveFromFavViewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveFromFavViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
 
    //Function to close the Dialog box
    onNoClick(): void {
    this.dialogRef.close();
  } 
  ngOnInit() {
  }

}

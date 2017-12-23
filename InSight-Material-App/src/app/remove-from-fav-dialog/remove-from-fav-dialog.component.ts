/* Dialog that shows up when the content is removed from the Favourites */

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-remove-from-fav-dialog',
  templateUrl: './remove-from-fav-dialog.component.html',
  styleUrls: ['./remove-from-fav-dialog.component.css']
})
export class RemoveFromFavDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveFromFavDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  //Function to close the Dialog box
  onNoClick(): void {
    this.dialogRef.close();
    //window.location.reload();
  }
  
  ngOnInit() {
  }

}

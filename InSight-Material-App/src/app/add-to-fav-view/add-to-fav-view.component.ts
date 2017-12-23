import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-to-fav-view',
  templateUrl: './add-to-fav-view.component.html',
  styleUrls: ['./add-to-fav-view.component.css']
})
export class AddToFavViewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddToFavViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  //Function that closes the Dialog
  onNoClick(): void {
    this.dialogRef.close();
  } 

  ngOnInit() {
  }

}

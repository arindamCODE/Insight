/* Dialog that shows up when the content is inserted from the Rich Text editor */

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-redirect-one-dialog',
  templateUrl: './redirect-one-dialog.component.html',
  styleUrls: ['./redirect-one-dialog.component.css']
})
export class RedirectOneDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RedirectOneDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  //Function to close the Dialog box  
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  } 

}

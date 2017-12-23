/* Dialog that shows up when the content is edited from the Rich Text editor */

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-redirect-two-dialog',
  templateUrl: './redirect-two-dialog.component.html',
  styleUrls: ['./redirect-two-dialog.component.css']
})
export class RedirectTwoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RedirectTwoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  //Function to close the Dialog box
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}

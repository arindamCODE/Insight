import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-redirect-four-dialog',
  templateUrl: './redirect-four-dialog.component.html',
  styleUrls: ['./redirect-four-dialog.component.css']
})
export class RedirectFourDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RedirectFourDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void 
  {
    this.dialogRef.close();
  }

  ngOnInit() {}

}

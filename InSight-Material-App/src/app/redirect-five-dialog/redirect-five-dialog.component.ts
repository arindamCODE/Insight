import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-redirect-five-dialog',
  templateUrl: './redirect-five-dialog.component.html',
  styleUrls: ['./redirect-five-dialog.component.css']
})
export class RedirectFiveDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RedirectFiveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void 
  {
    this.dialogRef.close();
  }

  ngOnInit() {}


}

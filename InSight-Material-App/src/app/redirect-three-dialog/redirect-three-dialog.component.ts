import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-redirect-three-dialog',
  templateUrl: './redirect-three-dialog.component.html',
  styleUrls: ['./redirect-three-dialog.component.css']
})
export class RedirectThreeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RedirectThreeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void 
  {
    this.dialogRef.close();
  }

  ngOnInit() {}
}

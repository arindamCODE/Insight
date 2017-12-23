import { UserDetails } from './../pre-result/UserDetails';
import { ShareDetails } from './../shareddetails';
import {MatSnackBar} from '@angular/material';
import { PreResultComponent } from './../pre-result/pre-result.component';
import { fetchIDsService } from './../fetchIDs.service';
// import { AutofilldropdownService } from './../autofilldropdown.service';
import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormControl, AbstractControl } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map'; 



@Component({
  selector: 'app-sharewithdialog',
  templateUrl: './sharewithdialog.component.html',
  styleUrls: ['./sharewithdialog.component.css']
})
export class SharewithdialogComponent {
  @Input() private ContentID: any;
  public FileID: any;
  public SharedWith: any;
  public SharedBy: any;
  public CreatedBy: any;
  public drops:any;
  public check:any;
  public faulty: boolean =false;
  //public headers:Headers; 
  public dropdown_usernames: any;
  public trial_recipients_userID_json: any;
  public preresultcomp: PreResultComponent ;
      constructor(public fetchidservice: fetchIDsService,public snackBar: MatSnackBar, public http:Http,/* public autofillservice : AutofilldropdownService,*/
        public dialogRef: MatDialogRef<SharewithdialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        
          console.log('reached constructor');
         
         }
         ngOnInit() {
          
            }

         autofill_dropdown(searchletters : string){
          console.log(searchletters);

           this.fetchidservice.getdropdown(searchletters).subscribe(result => {
            this.dropdown_usernames = result.json() as UserDetails[],console.log(this.dropdown_usernames);
            this.check = this.dropdown_usernames[0];
          })
          
        
        }

        getsharedwithIDandpost(recipient_name : any): Promise<any>{
          
          
          console.log('contentid '+this.fetchidservice.common_ContentID);
          console.log('fileid '+this.fetchidservice.common_FileID);
          console.log('sharedby '+this.fetchidservice.common_SharedBy);
          console.log('createdby '+this.fetchidservice.common_CreatedBy);
          console.log('recipients name is '+recipient_name);

          return this.fetchidservice.getSharedWith(recipient_name)
          .toPromise()
          .then(result => { this.trial_recipients_userID_json = result.json()['result'] as UserDetails[],
            console.log(/*'sharedwith '+*/this.trial_recipients_userID_json);
            if(this.trial_recipients_userID_json){
            
                 this.post_in_Content_Share_table();
                console.log('posted in ContentShare table');
                this.dialogRef.close();
                 }
            
            else{
              this.openSnackBar("Invalid User", "Enter a Legit Recipient"); 
            }
          }).catch(error => console.error(error));

        }

        public closedialogbox(){
          this.dialogRef.close();
        }
        public openSnackBar(message: string, action: string) {
          this.snackBar.open(message, action, {
            duration: 5000,
          });
        }
        public post_in_Content_Share_table()
        {
          let  headers= new Headers();
          let passterm:ShareDetails;
          passterm=new ShareDetails(this.fetchidservice.common_ContentID,this.fetchidservice.common_FileID,this.trial_recipients_userID_json['userID'],this.fetchidservice.common_SharedBy,this.fetchidservice.common_CreatedBy);
          headers.append('Content-Type','application/json');
          console.log("inside post");
          console.log('grrh'+this.fetchidservice.common_ContentID);
          this.fetchidservice.postinContentshare(passterm);
        
          console.log("post done");
          console.log(JSON.stringify(passterm));
        }

        myControl: FormControl = new FormControl();
    
      onNoClick(): void {
        this.dialogRef.close();
      }
      // fetchIDs(content:any){
      //   console.log("the content id is",content);
      // }
  }
  

 
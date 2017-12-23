import { MatSnackBar } from '@angular/material';
//Component to Provide the user with the Rich Text Editor and also the File Uploading feature

import { RedirectOneDialogComponent } from './../redirect-one-dialog/redirect-one-dialog.component';
import { Appconfig } from './../app.config';
import { PostService } from './../post.service';
import { FileUploaderService } from '../FileUploader.service'
import { FileDetailsUploaderService } from '../PostFileDetails.service'
import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { RequestOptions,Headers,Http,HttpModule } from '@angular/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers:[ FileUploaderService,FileDetailsUploaderService,PostService ]
})

export class EditorComponent implements OnInit {

  public editorContent = ''; //Local variable to hold whatever being inserted in the Rich Text Editor
  public tags = ''; //Local variable to hold whatever being inserted in the MetaTags field
  radio: number; //Button used to capture the values of the radio buttons whether Private or Public

 constructor(private post: PostService,
  private http:Http,
  private appconfig:Appconfig,
  private elem: ElementRef,
  public service: FileUploaderService,
  public service2: FileDetailsUploaderService,
  public snackBar:MatSnackBar,
  public dialog: MatDialog){}

 ngOnInit(){}

  // save(content: string, tags: string)
  //  {
  //    this.editorContent = content;
  //    this.tags = tags;
  //    this.post.postContent(this.editorContent, this.tags);
  //  }

  // fileChange(event)
  // {  
  //      debugger;  
  //      var form=document.forms.namedItem("fileinfo");
  //       let fileList: FileList = event.target.files;  
  //      if (fileList.length > 0)
  //       {      
  //                let file: File = fileList[0];  
  //                console.log(file);
  //                 console.log(file.name);
  //                 let formData: FormData = new FormData(form);  //Always initialize the Formdata with a valid form defined in HTML section.
  //                 console.log('this is file', file);
  //                 formData.append('UploadedFile', file,file.name);
  //                 console.log('#########', formData);    
  //                 let headers = new Headers();  
  //                headers.append('enctype', 'multipart/form-data');  //Important codeline to be included.
  //                 // headers.append('Accept', 'application/json');  
  //                let options = new RequestOptions({ headers: headers });  
  //                console.log('***********', formData);
  //                 console.log(options);
  //                 let apiUrl1 = this.appconfig.fileuploadurl;//.catch(error => Observable.throw(error))
                  
  //                this.http.post(apiUrl1,formData, options)
  //                 .subscribe(  
  //                  data => console.log(formData),  
  //                  error => console.log(error)
  //                 )
  //       }  
  // }
  
  id:number;
  form1:HTMLFormElement;
  metaTags:string;
  //ID:number;
  file1 :File[];

  MainUploader( file:File[], content:string, tags: string)
  {
    if (this.editorContent == "" && this.tags == "" && file.length== 0)
    {
      this.snackBar.open('Please provide some Content or Upload some Files', 'Close',{duration:3000});
    } 
    else if(file.length > 0 && tags == "" && this.editorContent == "")
      {
        
        this.snackBar.open('Please provide some Tags', 'Close',{duration:3000});
      }
    else
    {  
        this.editorContent=content;
        this.tags = tags;
        var form=document.forms.namedItem("fileinfo");//To capture the form in the HTML component.
        this.file1=file;//Used in HandleResponse()
        this.form1=form;//Used in Handleresponse()

        //Following code deals with uploading the content of contenteditor to the SQL Database and invokes the function to transfer contentID of content to FileTable(HandleResponse)
        this.post.postContent(this.editorContent,this.tags, this.radio).subscribe(data=>{this.HandleResponse(data);console.log(data)});

        //Following code deals with uploading attached files to local folder or Amazon S3 as required.
        //this.service.UploadFiles(this.file1,form);
        this.openDialog();
    }

  }

  //This is the function which posts the file details to the FileTable Database via FilesDetailsController
  HandleResponse(res)
  {
    console.log("Welcome to handleresponse");
    this.id=res._body;
    console.log("ID is "+this.id);
    this.service2.PostFileDetails(this.file1,this.form1,this.id);
    this.service.UploadFiles(this.file1,this.form1,this.id);
  }

  //Dialog Box that shows up when the data has been saved
  openDialog(): void {
    let dialogRef = this.dialog.open(RedirectOneDialogComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //Function to capture the value of the Private radio button
  change()
  {
    this.radio = 1;
  }

  //Function to capture the value of the Public radio button
  change1() {
    this.radio = 2;
  }

  check()
  {
    console.log(this.editorContent);
    console.log(this.tags);
    console.log(this.data);
    if(this.editorContent=="" && this.tags == "" )
      {
this.snackBar.open('Please provide something','Close');
      } 
  }

  data: any;
  fileNameFinder(data: any)
  {
    this.data = data;
  }
}
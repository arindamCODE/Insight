import { Appconfig } from './../app.config';
import { PostService } from './../post.service';
import { FileUploaderService } from '../FileUploader.service'
import { FileDetailsUploaderService } from '../PostFileDetails.service'
import { Component, OnInit,ElementRef } from '@angular/core';
import { RequestOptions,Headers,Http,HttpModule } from '@angular/http';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers:[ FileUploaderService,FileDetailsUploaderService,PostService ]
})
export class EditorComponent implements OnInit {
  public editorContent = '';
  public tags = '';

 constructor(private post: PostService,private http:Http,private appconfig:Appconfig,
  private elem: ElementRef,
  public service:FileUploaderService, public service2:FileDetailsUploaderService){}

 ngOnInit(){}

//  save(content: string, tags: string)
//   {
//     this.editorContent = content;
//     this.tags = tags;
//     this.post.postContent(this.editorContent, this.tags);
//   }

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

  MainUploader( file:File[], content:string,tag:string )
  {
    
    this.editorContent=content;
    this.metaTags=tag;
    var form=document.forms.namedItem("fileinfo");//To capture the form in the HTML component.
    this.file1=file;//Used in HandleResponse()
    this.form1=form;//Used in Handleresponse()

    //Following code deals with uploading the content of contenteditor to the SQL Database and invokes the function to transfer contentID of content to FileTable(HandleResponse)
    this.post.postContent(this.editorContent,this.metaTags).subscribe(data=>{this.HandleResponse(data);console.log(data)});

    //Following code deals with uploading attached files to local folder or Amazon S3 as required.
    this.service.UploadFiles(this.file1,form);

  }

  //This is the function which posts the file details to the FileTable Database via FilesDetailsController
  HandleResponse(res)
  {
    console.log("Welcome to handleresponse");
    this.id=res._body;
    console.log("ID is "+this.id);
    this.service2.PostFileDetails(this.file1,this.form1,this.id);
  }
}
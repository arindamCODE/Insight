//Component to show the Content to further edit the same

import { RedirectTwoDialogComponent } from './../redirect-two-dialog/redirect-two-dialog.component';
import { RedirectThreeDialogComponent } from './../redirect-three-dialog/redirect-three-dialog.component'; //Save file after edit dialog box function.
import { RedirectFourDialogComponent } from './../redirect-four-dialog/redirect-four-dialog.component'; // File downloaded successfully notification box.
import { RedirectFiveDialogComponent } from './../redirect-five-dialog/redirect-five-dialog.component'; //File deleted succeessfully dialog box.
import { PutService } from './../put.service';
import { GetIndiService } from './../get.indi.service';
import { ContentID } from './../ContentID';
import { PreResultComponent } from './../pre-result/pre-result.component';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { Http,Response, Headers, URLSearchParams, RequestOptions  } from '@angular/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FileUploaderService } from '../FileUploader.service';
import { FileDetailsUploaderService } from '../PostFileDetails.service';
import { FileID } from './../FileID';
import { Appconfig } from './../app.config';
import { GetFilesService } from '../GetFiles.service';
import { deleteFileService } from './../deleteFile.service';
import { FileDetailsEditService } from '../EditFileDetails.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ FileUploaderService,FileDetailsUploaderService,deleteFileService,GetFilesService,FileDetailsEditService ]
})

export class EditComponent implements OnInit {

  //Local variable to map the incoming ContentID object
  public content: ContentID;

  //Local attributes to map the properties of the incoming ContentID object
  contentId: number;
  userId: number;
  con: string;
  metaTags: string;
  isPrivate: boolean;
  isGraphCreated: boolean;
  isFavourites: boolean;
  createdBy: string;
  createdOn: Date;
  isDelete: boolean;
  modifiedOn: Date;

  radio: number; //Button used to capture the values of the radio buttons whether Private or Public

  constructor(private http: Http,
    private obj: GetIndiService,
    private UpdateContentObject: PutService,
    public dialog: MatDialog,
    public service: FileUploaderService,
    public service2: FileDetailsUploaderService,
    private appconfig:Appconfig,
    public AmazonS3UploaderObject: FileUploaderService,
    public FileDetailsPostObject: FileDetailsUploaderService,
    private deleteFileObject:deleteFileService,
    public GetFilesObject:GetFilesService,
    public EditFileDetailsObject:FileDetailsEditService) 
  {
    this.content = obj.content1;
  }

  ngOnInit(){}

  form1:HTMLFormElement;
  file1 :File[];

  MainUploader( file:File[], contentIdmainuploader: number, userId: number, content: string, metaTags: string, isPrivate: boolean, isGraphCreated: boolean, isFavourites: boolean, createdBy: string, createdOn: Date, isDelete: boolean, modifiedOn: Date )
  { 
    //Entities required to post files to amazons3 and UserFileDetails
    var form=document.forms.namedItem("fileinfo");//To capture the form in the HTML component.
    this.file1=file;//Used in HandleResponse()
    this.form1=form;//Used in Handleresponse()

    //This is the code snipped which is used to update the UserContentDetails
    this.contentId = contentIdmainuploader;
    this.userId = userId;
    this.con = content;
    this.metaTags = metaTags;

    if(this.radio == 1 )
      this.isPrivate = true;
    else
      this.isPrivate = false;
    
    this.isGraphCreated = isGraphCreated;
    this.isFavourites = isFavourites;
    this.createdBy = createdBy;
    this.createdOn = createdOn;
    this.isDelete = isDelete;
    this.modifiedOn = modifiedOn;
    this.UpdateContentObject.putContent(this.contentId, this.userId, this.con, this.metaTags, this.isPrivate, this.isGraphCreated, this.isFavourites, this.createdBy, this.createdOn, this.isDelete, this.modifiedOn);

    //Following code deals with uploading attached files to Amazon S3.
    this.AmazonS3UploaderObject.UploadFiles(this.file1,this.form1,this.contentId);

    //This is the function which posts the file details to the UserFileDetails Table via FilesDetailsController
    this.FileDetailsPostObject.PostFileDetails(this.file1,this.form1,this.contentId);
  }

  openDialog(): void  // Content along with files successfully saved dialog box.
  {
    let dialogRef = this.dialog.open(RedirectTwoDialogComponent, {
      width: '250px' 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*Code For Showing Attached File Details , and functionalities provided to download the file and delete the file with user permission from SQL Table follows..s*/

  //Entities added to Receive the filenames.
  userid:number;
  useridstr:string;
  filedetails:FileID[];
  fileDetailsNotDeleted:FileID[];
  fileDetailsNotNull:FileID[];
  contentIdShowFiles:number;
  filedetailsurl:string;

  //Entities required to soft delete the file by changing isDelete to true.
  fileId2:number;
  userId2:number;
  contentId2:number;
  filePath2:string;
  fileName2:string;
  fileType2:string;
  isPrivate2:boolean; //not null default
  isGraphCreated2:boolean; //not null default
  isFavourites2:boolean; //not null default
  createdBy2:string;
  createdOn2:Date;
  isDelete2:boolean;
  modifiedOn2:Date;

  //Url needed to download the file from AmazonS3 cloud server.
  private amazonS3UploadUrl: string =this.appconfig.amazonUploadUrl;
  
  
  //This function is used to display files uploaded with the respective content
  showFileDetails(contentIdFromHtml:number)
  {
    this.useridstr = localStorage.getItem('id');
    this.userid=parseInt(this.useridstr);
    this.contentIdShowFiles=contentIdFromHtml; // ContentId from PutContent is used to assign to contentIdshowfiles
    console.log("ContentId to be passed through get function is "+this.contentIdShowFiles);

    let myHeaders = new Headers();
    myHeaders.set('Content-Type', 'application/json');

    let options=new RequestOptions({headers:myHeaders});
    this.filedetailsurl=this.appconfig.filesDetailsUrl;

    this.http.get(this.filedetailsurl+"/"+this.contentIdShowFiles+"/"+this.userid,options)
    .subscribe(res=>{
      this.filedetails=res.json() as FileID[];
      this.fileDetailsNotDeleted=this.filedetails.filter(GetFilesObject=>GetFilesObject.isDelete==false); //Show only those files which have not beeen marked as deleted in database table.
      this.fileDetailsNotNull=this.fileDetailsNotDeleted.filter(GetFilesObject=>GetFilesObject.fileName!=null);//Show those files which are not deleted and where filename is not null.
    },(error)=>console.log(error));

  }

  DownloadFile(fileName:string) //Downloads the file directly to the desktop.
  {
    let headers = new Headers();  
    headers.append('Content-Type', 'application/json');  //Important codeline to be included.
    //headers.append('Accept', 'application/json');  
    let options = new RequestOptions({ headers: headers }); 

    this.http.get(this.amazonS3UploadUrl+"/"+fileName)
    .subscribe(  
    data => console.log(data),  
    error => console.log(error)
    )
  }

  DeleteFile(fileIdDel:number,userIdDel:number,contentIdDel:number,filePathDel:string,fileNameDel:string,
  fileTypeDel:string,isPrivateDel:boolean,isGraphCreatedDel:boolean,isFavouritesDel:boolean,createdByDel:string,
  createdOnDel:Date,modifiedOnDel:Date)
  {
    /*Uncomment the following lines from headers to end of delete if you want to hard delete the file from cloud server itself.*/

    /* Code to Hard Delete the File follows..*/

    /*let headers = new Headers();  
    headers.append('Content-Type', 'application/json');  //Important codeline to be included.
    //headers.append('Accept', 'application/json');  
    let options = new RequestOptions({ headers: headers }); 
    
    this.http.delete(this.amazonS3UploadUrl+"/"+fileName)
    .subscribe(
      data=>console.log(data),
      error=>console.log(error)

    )*/

    /*Code for soft deleteing the file follows..*/
    //Fields Inititialised..

    this.fileId2=fileIdDel;
    this.contentId2 = contentIdDel;
    this.userId2 = userIdDel;
    this.filePath2=filePathDel;
    this.fileName2=fileNameDel;
    this.fileType2=fileTypeDel;
    this.isPrivate2 = isPrivateDel;
    this.isGraphCreated2 = isGraphCreatedDel;
    this.isFavourites2 = isFavouritesDel;
    this.createdBy2 = createdByDel;
    this.createdOn2 = createdOnDel;
    this.isDelete2 = true; //This is where soft delete occurs from frontend.
    this.modifiedOn2 = modifiedOnDel;

    //Delete Function called.
    this.deleteFileObject.deleteFileDetails(this.fileId2,this.contentId2, this.userId2, this.filePath2,this.fileName2,this.fileType2, this.isPrivate2, this.isGraphCreated2, this.isFavourites2, this.createdBy2, this.createdOn2, this.isDelete2, this.modifiedOn2);

  }

  //Fields for editing file details
  form2:HTMLFormElement;
  file2 :File[];
  fileIdsave:number;
  contentIdSave:number;
  isPrivateSave:boolean;
  isFavouritesSave:boolean;
  isDeleteSave:boolean;
  isGraphSave:boolean;
  createdOnSave:Date;
  modifiedOnSave:Date;


  SaveFile( filesave:File[], fileIdsavefile: number, contentIdsavefile: number,isPrivatesavefile:boolean,isfavouritessavefile:boolean,isDeletesavefile:boolean,isGraphsavefile:boolean,createdOnsavefile:Date,modifiedOnsavefile:Date)
  {
    

    
    //Fields required to post files to amazons3 and UserFileDetails
    var form=document.forms.namedItem("fileEdit");//To capture the form in the HTML component.
    this.file2=filesave;
    this.form2=form;
    this.fileIdsave=fileIdsavefile;//FileId
    console.log("fileid inside savefile "+this.fileIdsave);

    this.isGraphSave=isGraphsavefile;
    this.createdOnSave=createdOnsavefile;
    this.modifiedOnSave=modifiedOnsavefile;

    this.contentIdSave=contentIdsavefile; //ContentId to be used for uploading in amzon and userfiledetails
    //console.log("contentid inside savefile "+this.contentIdSave);
    this.isPrivateSave=isPrivatesavefile;
    //console.log("isPrivate inside savefile "+this.isPrivateSave);
    this.isFavouritesSave=isfavouritessavefile;
    //console.log("isFavourite inside savefile "+this.isFavouritesSave);
    this.isDeleteSave=isDeletesavefile;
    //console.log("isDelete inside savefile "+this.isDeleteSave);


    //Following code deals with uploading attached files to Amazon S3.
    this.AmazonS3UploaderObject.UploadFiles(this.file2,form,this.contentIdSave); 

    //This is the function which posts the file details to the UserFileDetails Table via FilesDetailsController
    this.EditFileDetailsObject.EditFileDetails(this.file2,this.form1,this.contentIdSave,this.fileIdsave,this.isPrivateSave,this.isFavouritesSave,this.isDeleteSave,this.isGraphSave,this.createdOnSave,this.modifiedOnSave);
  }

  /*Dialog boxes for successful button operations inside file details card follows..*/

  openDialogSaveEditedFile(): void  //Save edited file notification box.
  {
    let dialogRef = this.dialog.open(RedirectThreeDialogComponent, {
      width: '250px'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogDownloadFile(): void //File downloaded successfully notification box.
  {
    let dialogRef = this.dialog.open(RedirectFourDialogComponent, {
      width: '250px'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogDeleteFile(): void //File deleted successfully notification box.
  {
    let dialogRef = this.dialog.open(RedirectFiveDialogComponent, {
      width: '250px'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //Function to capture the value of the Private radio button
  change() {
    this.radio = 1;
  }

  //Function to capture the value of the Public radio button
  change1() {
    this.radio = 2;
  }
}
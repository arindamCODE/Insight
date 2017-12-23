export class FileID
{
    fileId:number;

    userId:number;
    
    contentId:number;

    filePath:string;

    fileName:string;

    fileType:string;

    isPrivate:boolean; //not null default

    isGraphCreated:boolean; //not null default

    isFavourites:boolean; //not null default

    createdBy:string;

    createdOn:Date;
    
    isDelete:boolean; //not null default

    modifiedOn:Date;

    constructor(fileId:number,userId:number,contentId:number,filePath:string,fileName:string,fileType:string,isPrivate:boolean,
    isGraphCreated:boolean,isFavourites:boolean,createdBy:string,createdOn:Date,isDelete:boolean,modifiedOn:Date)
    {
        this.fileId=fileId;
        this.userId=userId;
        this.contentId=contentId;
        this.filePath=filePath;
        this.fileName=fileName;
        this.fileType=fileType;
        this.isPrivate=isPrivate;
        this.isGraphCreated=isGraphCreated;
        this.isFavourites=isFavourites;
        this.createdBy=createdBy;
        this.createdOn=createdOn;
        this.isDelete=isDelete;
        this.modifiedOn=modifiedOn;
    }
}
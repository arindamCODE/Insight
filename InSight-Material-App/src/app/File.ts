export class FileUpload
{
    //fileId:number;
    
    userId:number;
    
    contentId:number;

    filePath:string;

    fileName:string;

    fileType:string;

    //isPrivate:boolean; //not null default

    //isGraphCreated:boolean; //not null default

    //isFavourites:boolean; //not null default

    createdBy:string;

    //createdOn:Date;
    
    //isDelete:boolean; //not null default

    //modifiedOn:Date;

    constructor(userId:number,contentId:number,filePath:string,fileName:string,fileType:string,createdBy:string)
    {
        this.userId=userId;

        this.contentId=contentId;

        this.filePath=filePath;

        this.fileName=fileName;

        this.fileType=fileType;

        this.createdBy=createdBy;
    }
    
}
export class ShareDetails{
    contentID:number;
    fileID:number;
    sharedWith:number;
    sharedby:number;
    createdBy:string;

    constructor(contentID: number,fileID:number,sharedWith:number,sharedby:number,createdBy:string) {
        this.contentID = contentID;
        this.fileID=fileID;
        this.sharedWith=sharedWith;
        this.sharedby=sharedby;
        this.createdBy=createdBy;
    }
 }
export class Content {
    userId: number;
    content: string;
    metaTags: string; 
    createdBy: string;

    constructor(userId: number, content: string, metaTags: string, createdBy: string) 
    {
        this.userId = userId;
        this.content = content;
        this.metaTags = metaTags;
        this.createdBy = createdBy; 
    }

}  
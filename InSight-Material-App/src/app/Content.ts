//Model class to map the data and send to the database

export class Content {
    userId: number;
    content: string;
    metaTags: string;
    createdBy: string;
    isPrivate: boolean;

    constructor(userId: number, content: string, metaTags: string, createdBy: string, isPrivate: boolean) {
        this.userId = userId;
        this.content = content;
        this.metaTags = metaTags;
        this.createdBy = createdBy;
        this.isPrivate = isPrivate;
    }

}
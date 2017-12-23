//Service to Get Individual ContentID objects from the database

import { ContentID } from './ContentID';
import { Injectable } from '@angular/core';


@Injectable()

export class GetIndiService 
{
    //local variable to capture the incoming object
    public content1: ContentID;

    constructor() {}  

   //assigning the incoming value to the local 
   setContent(content: ContentID)
    {
        this.content1 = content;
    }
}
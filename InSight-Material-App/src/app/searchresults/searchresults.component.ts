import { QueryDetails } from './../querydetails';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';





@Component({
 selector: 'app-searchresults',
 templateUrl: './searchresults.component.html',
 styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent {

 private result;
 public final;
 public final1;
 public test=true;
 
 constructor(
 
   private searchService: SearchService,
   private route: ActivatedRoute){
     console.log("hi search");
     
     console.log(this.test);
     this.route.paramMap
     .switchMap((param: ParamMap) => { this.test=true; return(this.searchService.search(param.get('value'))) }).subscribe( result => 
     {  
      this.test=false;
       this.result = result; 
       console.log(result);
       this.final1 = this.result._body;
       //console.log("type of res",typeof JSON.parse(final1));
       
       this.final=JSON.parse(this.final1);
       console.log("the res is ",this.final);
       });     
   }
   public passString:string;

// passquery(term:string){
//     this.passString=term;
//     console.log(this.passString);
//   }
 

}
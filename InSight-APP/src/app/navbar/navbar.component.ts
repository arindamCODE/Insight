import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialUser, AuthService } from 'angular4-social-login';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
    currentUser: User;
    users: User[] = [];
    user: SocialUser;
    googleuser: SocialUser;
    constructor(private userService: UserService,private authService: AuthService,
    private router: Router) {
        
   }
  
   ngOnInit() {
        if(localStorage.getItem('currentUser'))
        { 
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        else if(localStorage.getItem('user'))
        {
           this.user = JSON.parse(localStorage.getItem('user'));
           this.userService.socialregisterfacebook(this.user);
           console.log(this.user);
        }
        else if(localStorage.getItem('googleuser'))
        {
           this.googleuser = JSON.parse(localStorage.getItem('googleuser'));
           this.userService.socialregistergoogle(this.googleuser);
           console.log(this.googleuser);
        }
        // this.loadAllUsers();
       
    }
  
  //  deleteUser(id: number) {
  //       this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  //   }
  
  //  private loadAllUsers() {
  //       this.userService.getAll().subscribe(users => { this.users = users; });
  //   }
  signOutfacebook(): void {
    
      localStorage.removeItem('user');
      
        console.log("Logging outt..");
        this.router.navigate(['/login']);
       
        
   
  }
  

  signOutgoogle(): void {
    
    localStorage.removeItem('googleuser');
      
        console.log("Logging outt..");
        this.router.navigate(['/login']);
       
        
   
  }
  }





// export class LoginsuccessComponent implements OnInit {

//   currentUser: User;
//   users: User[] = [];
//   user: SocialUser;
//   constructor(private userService: UserService,private authService: AuthService,
//   private router: Router) {
      
//  }

//  ngOnInit() {
//       if(localStorage.getItem('currentUser'))
//       { 
//         this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
//       }
//       else if(localStorage.getItem('user'))
//       {
//          this.user = JSON.parse(localStorage.getItem('user'));
//          this.userService.socialregister(this.user);
//          console.log(this.user);
//       }
//       // this.loadAllUsers();
     
//   }

// //  deleteUser(id: number) {
// //       this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
// //   }

// //  private loadAllUsers() {
// //       this.userService.getAll().subscribe(users => { this.users = users; });
// //   }
//   signOut(): void {
//       this.authService.signOut().then(() => {
//         //   console.log("Logging outt..");
//           this.router.navigate(['/login']);
//           this.user = null;
//           localStorage.removeItem('user');
//       });
//     }

// }

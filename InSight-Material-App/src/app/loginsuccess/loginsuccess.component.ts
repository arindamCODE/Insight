// import { Router } from '@angular/router';
// import { SocialUser, AuthService } from 'angular4-social-login';
// import { Component, OnInit } from '@angular/core';
// import { User } from '../_models/index';
// import { UserService } from '../_services/index';

// @Component({
//   moduleId:module.id,
//   selector: 'app-loginsuccess',
//   templateUrl: './loginsuccess.component.html',
//   styleUrls: ['./loginsuccess.component.css']
// })
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
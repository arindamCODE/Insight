import { Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
@Component({
  selector: 'app-socialmedialogin',
  templateUrl: './socialmedialogin.component.html',
  styleUrls: ['./socialmedialogin.component.css']
})
export class SocialmedialoginComponent implements OnInit {

  user: SocialUser;
  
   constructor(private authService: AuthService, private router: Router,
      private route: ActivatedRoute) { }
  
   ngOnInit() {
      
     this.authService.authState.subscribe((user) => {
        this.user = user;
      });
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/auth';
    }
    private returnUrl:String;
    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data => {
        
       localStorage.setItem('googleuser', JSON.stringify(data));
       console.log('google');
        this.router.navigate(['/auth']);
    },
    error => {
        console.log("error");
    });
      
   }
    loggedIn(){
      console.log("Navigation");
      this.router.navigateByUrl('/auth');
    }
    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(data => {
        
       localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/auth']);
        
    });
    



}
signOut(): void {
      this.authService.signOut().then(() => {
        localStorage.removeItem('user');
          console.log("Logging outt..");
          this.router.navigate(['/login']);
          this.user = null;
          
      });
    }
}

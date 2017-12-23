import { fetchIDsService } from './fetchIDs.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharewithdialogComponent } from './sharewithdialog/sharewithdialog.component';
import { RedirectFiveDialogComponent } from './redirect-five-dialog/redirect-five-dialog.component';
import { RedirectFourDialogComponent } from './redirect-four-dialog/redirect-four-dialog.component';
import { RedirectThreeDialogComponent } from './redirect-three-dialog/redirect-three-dialog.component';
import { RemoveFromFavViewComponent } from './remove-from-fav-view/remove-from-fav-view.component';
import { RemoveFromFavDialogComponent } from './remove-from-fav-dialog/remove-from-fav-dialog.component';
import { AddToFavViewComponent } from './add-to-fav-view/add-to-fav-view.component';
import { AddToFavDialogComponent } from './add-to-fav-dialog/add-to-fav-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SettingsService } from './settings.service';
import { MaterialModule } from './material/material.module';
import { FileUploaderService } from './FileUploader.service';
import { FileDetailsUploaderService } from './PostFileDetails.service';
import { ViewService } from './view.service';
import { RemoveFavService } from './remove.fav.service';
import { PutService } from './put.service';
import { PutFavService } from './put.fav.service';
import { GetIndiService } from './get.indi.service';
import { DeleteService } from './delete.service';
import { IsDeleteService } from './IsDelete.service';
import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service';
import { AlertComponent } from './_directives/alert.component';
import { PostService } from './post.service';
import { Appconfig } from './app.config';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { SearchService } from './search.service';
import { FavouritesService} from './favourites.service';
import { HttpModule, Http, ConnectionBackend } from '@angular/http';
import { FormControl,ReactiveFormsModule } from '@angular/forms';



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuillEditorModule} from 'ngx-quill-editor';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { EditComponent } from './edit/edit.component';
import { PreResultComponent } from './pre-result/pre-result.component';
import { SocialmedialoginComponent } from './socialmedialogin/socialmedialogin.component';
// import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent, EqualValidator } from './register/register.component';
import { AuthGuard } from './_guards/index';
import { UserService } from './_services/index';
import { SocialLoginModule } from "angular4-social-login";
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ViewComponent } from './view/view.component';
import { ViewFavouriteComponent } from './view-favourite/view-favourite.component';
import { SettingsComponent } from './settings/settings.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
// import { RedirectOneDialogComponent } from './redirect-one-dialog/redirect-one-dialog.component';
// import { RedirectTwoDialogComponent } from './redirect-two-dialog/redirect-two-dialog.component';
// import { MatDatepicker, MatDatepickerModule } from '@angular/material';
// import { ChangepasswordComponent } from './changepassword/changepassword.component';


import { RedirectOneDialogComponent } from './redirect-one-dialog/redirect-one-dialog.component';
import { RedirectTwoDialogComponent } from './redirect-two-dialog/redirect-two-dialog.component';
import { RemoveFavComponent } from './remove-fav/remove-fav.component';




// import { MatDatepicker, MatDatepickerModule } from '@angular/material';

let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("490021395768-j5dp3hodujr3nun6tq2l05iqmvrt2abk.apps.googleusercontent.com")
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("383611688737067")
    }
  ]);
  export function provideConfig() {
    return config;
  }
const appRoutes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'forgotpassword',component:ForgotpasswordComponent},
  { path:'dashboard',canActivate:[AuthGuard],component:DashboardComponent,
      children:[
      { path:'searchresults/:value',component:SearchresultsComponent},
      { path: 'edit', component: EditorComponent },
      { path: 'pre', component: PreResultComponent },
      { path: 'ed', component: EditComponent },
      { path: 'view', component: ViewComponent},
      { path: 'viewfav', component: ViewFavouriteComponent },
      { path: 'favourites', component: FavouritesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'changepassword', component: ChangepasswordComponent },
    ]
  },
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavbarComponent,
    SearchbarComponent,
    SearchresultsComponent,
    ChangepasswordComponent,
    EditorComponent,
    EditComponent,
    PreResultComponent,
    SettingsComponent,
    ChangepasswordComponent,
    SocialmedialoginComponent,
    RedirectOneDialogComponent, 
    RedirectTwoDialogComponent,
    LoginComponent,
    RegisterComponent,
    ChangepasswordComponent,
    EqualValidator,
    AlertComponent,
    DashboardComponent,
    FavouritesComponent,
    ViewComponent,
    ViewFavouriteComponent,
    ForgotpasswordComponent,
    RedirectOneDialogComponent,
    RedirectTwoDialogComponent,
    DeleteDialogComponent,
    AddToFavDialogComponent,
    RemoveFromFavDialogComponent,
    AddToFavViewComponent,
    RemoveFromFavViewComponent,
    ChangepasswordComponent,
    RedirectThreeDialogComponent,
    RedirectFourDialogComponent,
    RedirectFiveDialogComponent,
    SharewithdialogComponent,
    RemoveFavComponent
  ],

  entryComponents:[ForgotpasswordComponent,SharewithdialogComponent,ChangepasswordComponent,RedirectOneDialogComponent, RedirectTwoDialogComponent, DeleteDialogComponent,
  AddToFavDialogComponent,RemoveFromFavDialogComponent, AddToFavViewComponent,
  RemoveFromFavViewComponent,RedirectThreeDialogComponent,RedirectFourDialogComponent,RedirectFiveDialogComponent,
RemoveFavComponent],

  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    QuillEditorModule,
    HttpClientModule,
    SocialLoginModule,
    MaterialModule,
    NgxPaginationModule,
    ReactiveFormsModule 

    
  ],
//   entryComponents: [RedirectOneDialogComponent, RedirectTwoDialogComponent, DeleteDialogComponent,
//   AddToFavDialogComponent,
// RemoveFromFavDialogComponent, AddToFavViewComponent,
// RemoveFromFavViewComponent],
  providers: [
    
    HttpModule,
    SearchService,
    Appconfig,
    PostService,
    FavouritesService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    IsDeleteService,
    DeleteService,
    GetIndiService,
    PostService,
    PutFavService,
    PutService,
    RemoveFavService,
    ViewService,
    FileUploaderService,
    FileDetailsUploaderService,
    SettingsService,
    fetchIDsService,
    UserService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
  }
],
  bootstrap: [AppComponent]
})

export class AppModule { }

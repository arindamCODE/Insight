import { FileUploaderService } from './FileUploader.service'
import { FileDetailsUploaderService } from './PostFileDetails.service'
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
import { FormService } from './form.service';
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
import { FormComponent } from './form/form.component';
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
import { RedirectOneComponent } from './redirect-one/redirect-one.component';
import { RedirectTwoComponent } from './redirect-two/redirect-two.component';
import { ViewComponent } from './view/view.component';
import { ViewFavouriteComponent } from './view-favourite/view-favourite.component';
let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com")
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
  { path:'auth',component:DashboardComponent,canActivate:[AuthGuard]},
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'dashboard',component:DashboardComponent,
      children:[{ path: 'form', component: FormComponent},
      { path:'searchresults/:value',component:SearchresultsComponent},
      { path: 'edit', component: EditorComponent },
      { path: 'pre', component: PreResultComponent },
      { path: 'ed', component: EditComponent },
      { path: 're1', component: RedirectOneComponent },
      { path: 're2', component: RedirectTwoComponent },
      { path: 'view', component: ViewComponent},
      { path: 'viewfav', component: ViewFavouriteComponent },
      { path: 'favourites', component: FavouritesComponent }]
  },
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavbarComponent,
    SearchbarComponent,
    SearchresultsComponent,
    FormComponent,
    EditorComponent,
    EditComponent,
    PreResultComponent,
    SocialmedialoginComponent,
    LoginComponent,
    RegisterComponent,
    EqualValidator,
    AlertComponent,
    DashboardComponent,
    FavouritesComponent,
    ViewComponent,
    RedirectOneComponent,
    RedirectTwoComponent,
    ViewFavouriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    QuillEditorModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    FormService,
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
    UserService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
  }
],
  bootstrap: [AppComponent]
})

export class AppModule { }

<<<<<<< HEAD

import { Http, ConnectionBackend, HttpModule } from '@angular/http';
=======
<<<<<<< HEAD
import { MatDialogRef } from '@angular/material/dialog';
=======
import { Http, ConnectionBackend, RequestOptions, HttpModule } from '@angular/http';
>>>>>>> 3728e98ed4ad8d089fc0454314ce221f4da2030b
import { UserService } from './../_services/user.service';
import { ModuleWithProviders, Inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
>>>>>>> 801c75e2dbab19e89fe5cc145ca14ede46db2c7e
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordComponent } from './forgotpassword.component';
import { MatFormFieldModule, MatSnackBar, MatDialog, MatDialogRef} from '@angular/material';



describe('ForgotpasswordComponent', () => {

  
   
  let component: ForgotpasswordComponent = newFunction();
  
  // let fixture: ComponentFixture<ForgotpasswordComponent>;
  

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports:[FormsModule,MatFormFieldModule,HttpModule],
  //     providers: [UserService,Http,ConnectionBackend,MatSnackBar],
  //     declarations: [ ForgotpasswordComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //       fixture = TestBed.createComponent(ForgotpasswordComponent);
  //       component = fixture.componentInstance;
  //       fixture.detectChanges();
  //     });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });
  // it('should have a component', () => {
        
  //       expect(component).toBeTruthy();
  //     });
})




function newFunction() {
  let component: ForgotpasswordComponent;
<<<<<<< HEAD
  return component;
}
//   beforeEach(() => {
//     fixture = TestBed.createComponent(ForgotpasswordComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
=======
  let fixture: ComponentFixture<ForgotpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ ForgotpasswordComponent ],
      providers: [MatDialogRef]
=======
      imports:[FormsModule,MatFormFieldModule,HttpModule],
      providers: [UserService,Http,ConnectionBackend,RequestOptions],
      declarations: [ ForgotpasswordComponent ]
>>>>>>> 801c75e2dbab19e89fe5cc145ca14ede46db2c7e
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 3728e98ed4ad8d089fc0454314ce221f4da2030b

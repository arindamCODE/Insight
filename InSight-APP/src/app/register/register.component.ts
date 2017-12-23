import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
    selector: '[Equalvalidate][formControlName],[formControl],[ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => EqualValidator),
            multi: true
        }
    ]
})
export class EqualValidator implements Validator {
    
       constructor(@Attribute('Equalvalidate') public Equalvalidate: string) { }
    
       validate(abControl: AbstractControl): { [key: string]: any } {
            // Get self value.
            let val = abControl.value;
    
           // Get control value.
            let cValue = abControl.root.get(this.Equalvalidate);
    
           // value not equal
            if (cValue && val !== cValue.value) return {
                Equalvalidate: false
            }
    
           return null;
        }
    }
@Component({
    moduleId: module.id.toString(),
    selector:'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['/register.component.css']
})

export class RegisterComponent {
    model: any = {};
    loading = false;

   constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

   register() {
        this.loading = true;
        this.model.secretregister='secretcode';
        console.log()
        this.userService.create(this.model.firstName,this.model.lastName,this.model.username,this.model.email,this.model.password,this.model.secretregister)
            .subscribe(
                data => {
                    this.alertService.success('Registration success', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error('Sorry!!Email has already registered with us');
                    this.loading = false;
                   
                });
    }
}
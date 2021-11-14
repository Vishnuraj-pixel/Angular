import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { PasswordValidator } from './shared/password.validator';
import { forbiddenNameValidator } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm: FormGroup | any;

  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder, private _registrationService : RegistrationService) {}

  ngOnInit () {
    this.registrationForm = this.fb.group({
      userName : ['', [ Validators.required, Validators.minLength(3), forbiddenNameValidator ]],
      email : [''],
      subscribe : [false],
      password : [''],
      confirmPassword : [''],
      address : this.fb.group({
        city : [''],
        state : [''],
        postalCode : ['']
      }),alternateEmails : this.fb.array([])
    }, {validator : PasswordValidator}); 

    this.registrationForm.get('subscribe').valueChanges.subscribe((checkedValue: any) => {
      const email = this.registrationForm.get('email')

      if (checkedValue) {
        email.setValidators(Validators.required)
      }
      else {
         email.clearValidators();
      }
      email.updateValueAndValdity();
    } )
  }



  title = 'reactiveForm-app';
  // registrationForm = new FormGroup({
  //   userName : new FormControl('Vishnu Rajagopalan'),
  //   password : new FormControl('@293'),
  //   confirmPassword : new FormControl('@293'),
  //   address : new FormGroup({
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     postalCode : new FormControl('')
  //   })
  // }); 
  

  loadApiData() {
    this.registrationForm.setValue({
      userName : 'Bruce',
      email : 'abc@email.in',
      subcribe : false,
      password : 'test',
      confirmPassword : 'test',
      address : {
        city : 'City',
        state : 'State',
        postalCode : '123456'
      }
    });
  }


  onSubmit() {
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value).subscribe(
      response => console.log('Success!:', response),
      error => console.error('Error!:', error)
    )   
  }

}

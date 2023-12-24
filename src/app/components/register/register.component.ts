import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from 'src/app/shared/password-match.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({})



  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private messageService: MessageService, private router: Router
  ) {}


  ngOnInit(): void {
    this.buildForm();

    this.registerForm.valueChanges.subscribe(next => {
      console.log(next);
      
    })
  }

  buildForm(): void{
    this.registerForm = this.fb.group(
      {
        // fullName: [
        //   '',
        //   [Validators.required, Validators.pattern(/^[a-zA-Z]+(?:[a-zA-Z]+)*$/)],
        // ],
        username: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z]+(?:[a-zA-Z]+)*$/)],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: passwordMatchValidator,
      }
    );
  }
  // get fullName() {
  //   return this.registerForm.controls['fullName'];
  // }

  get username() {
    return this.registerForm.controls['username'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  submitDetails() {

    let registerData = this.registerForm.value;
   // const postData = { ...this.registerForm.value };
   
    this.http.post("http://localhost:8080/register", registerData,
    {
      responseType: 'text'})
      .subscribe((resultData: any)=>{
 this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfully' });
      this.router.navigate(['login'])
      },
      
      // console.log(resultData),
      error =>{
this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
      )
     
    
  }
   
    // delete postData.confirmPassword;
    // this.authService.registerUser(postData as User).subscribe(
    //   response => {
    //     console.log(response);
    //     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfully' });
    //     this.router.navigate(['login'])
    //   },
    //   error => {
    //     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
    //   }
    // )
  }

  // submitDetails() {
  //   const postData = { ...this.registerForm.value };
  //   delete postData.confirmPassword;
  //   this.authService.registerUser(postData as User).subscribe(
  //     response =>{
  //         console.log(response),
  //         this.messageService.add({severity:'success', summary: 'Success', detail: 'Register Successfully'});
  //         this.route.navigate(['login'])
  //     },
     
  //     error => {
  //       this.messageService.add({severity:'error', summary: 'Error', detail: 'Something went wrong'});
  //     }
  //   );
  // }


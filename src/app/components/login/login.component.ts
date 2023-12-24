import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string ="";
  password: string ="";


  loginForm = this.fb.group({
    username: ['', Validators.required],
    // email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    // private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  // get email() {
  //   return this.loginForm.controls['email'];
  // }

  // get username() {
  //   return this.loginForm.controls['username'];
  // }

  // get password() {
  //   return this.loginForm.controls['password'];
  // }

  

  loginUser() {

    console.log(this.username);
    console.log(this.password);
  let data = this.loginForm.value;
    
    


    this.http.post("http://localhost:8080/authenticate", data).subscribe(
      (result: any) =>{
        console.log(result);
        localStorage.setItem('token', result.jwtToken);

        this.router.navigate(['/home'])
      }, err => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        // alert('kemi error')
      });
        
      }
    

    // const { username, password } = this.loginForm.value;
    // this.authService.getUserByUsername(username as string).subscribe((response) => {
    //   if (response.length > 0 && response[0].password === password) {
    //     sessionStorage.setItem('username', username as string);
    //     this.router.navigate(['/home']);
    //   } else {
    //     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'email or password is wrong' });
    //   }
    // }, error =>{
    //   this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
    // }
    
    // );
  }


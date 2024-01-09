import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataInterface } from 'src/app/interfaces/data.interface';
import { DataService } from 'src/app/services/data.service';
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ButtonModule],
  standalone: true,
})
export class HomeComponent implements OnInit {
  text: DataInterface = { message: '' };

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.router.navigate(['/home']);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: ' successfully',
      });
    } else {
      this.router.navigate(['login']);
    }
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  hello() {
    this.dataService.getData().subscribe((result: DataInterface) => {
      console.log(result);

      this.text.message = result.message;
    });
  }
}

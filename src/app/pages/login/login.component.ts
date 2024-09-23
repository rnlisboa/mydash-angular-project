import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/api/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDTO } from '../../core/services/api/dto/login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class Login {
  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const credentials: LoginDTO = this.loginForm.value;
      this.userService.login(credentials).subscribe(logged => {
        if (logged) {
          this.router.navigate(['/dashboard']);
        } else {
          alert('Login failed. Please try again.');
        }
      });
    }
  }
}

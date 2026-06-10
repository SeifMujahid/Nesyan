import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MainService } from 'src/app/context/main.service';
import { ResetPasswordInterface } from 'src/app/core/interfaces/reset-password-interface';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  resendDisabled = false;
  resendCountdown = 0;
  countdownInterval: any;
  ressetPasswordData: ResetPasswordInterface = {} as ResetPasswordInterface;
  tempEmail: string = '';
  constructor(
    private authService: AuthService,
    private _mainService: MainService,
    private _router: Router,
  ) {}

  toastr = inject(ToastrService);

  ngOnInit(): void {
    this._mainService.tempEmail.subscribe({
      next: (email) => {
        this.resetPasswordForm.patchValue({ email: email });
        this.tempEmail = email;
      },
    });
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    code: new FormControl(null, [Validators.required]),
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      ),
    ]),
  });

  resetPassword(): void {
    if (this.resetPasswordForm.valid) {
      this.ressetPasswordData.email = this.resetPasswordForm.value.email;
      this.ressetPasswordData.code = this.resetPasswordForm.value.code;
      this.ressetPasswordData.newPassword =
        this.resetPasswordForm.value.newPassword;
      this.authService.resetPassword(this.ressetPasswordData).subscribe({
        next: (response) => {
          console.log('Password reset successfully:', response);
          this.showSuccess(response.message);
          this._router.navigate(['/auth/login']);
        },
        error: (err) => {
          console.error('Error resetting password:', err);
          this.showError(err.error.message);
        },
      });
    } else {
      console.log('Form is invalid');
      this.resetPasswordForm.markAllAsTouched();

      const firstInvalid = Object.entries(this.resetPasswordForm.controls).find(
        ([_, control]) => control.invalid,
      );

      if (firstInvalid) {
        const [fieldName, control] = firstInvalid;
        const errorType = Object.keys(control.errors!)[0];

        const errorMessages: any = {
          email: {
            required: {
              message: 'Email is required',
              hint: 'Enter your email address',
            },
            email: {
              message: 'Invalid email address',
              hint: 'Enter a valid email like example@gmail.com',
            },
          },

          code: {
            required: {
              message: 'Verification code is required',
              hint: 'Enter the code sent to your email',
            },
            minlength: {
              message: 'Invalid code',
              hint: 'The verification code is too short',
            },
          },

          newPassword: {
            required: {
              message: 'New password is required',
              hint: 'Enter your new password',
            },
            minlength: {
              message: 'Password is too short',
              hint: 'Password must be at least 8 characters',
            },
            maxlength: {
              message: 'Password is too long',
              hint: 'Password must not exceed 20 characters',
            },
            pattern: {
              message: 'Weak password',
              hint: 'Use at least one uppercase letter, one lowercase letter, one number, and one special character (@ $ ! % * ? &)',
            },
          },
        };

        const errorData = errorMessages[fieldName]?.[errorType];

        if (errorData) {
          this.showErrorHint(errorData.message, errorData.hint);
        } else {
          this.showErrorHint('Invalid field', 'Please check your input');
        }
      }
    }
  }
  resendCode(): void {
    if (this.resendDisabled) return;

    this.authService.forgetPassword({ email: this.tempEmail }).subscribe({
      next: (response) => {
        console.log('Forget password request successful:', response);
        this.showSuccess(response.message);
        // this._router.navigate(['/auth/reset-password']);
        this.startCooldown();
      },
      error: (err) => {
        console.error('Forget password request failed:', err);
        this.showError(err.error.message);
      },
    });
  }

  startCooldown(): void {
    this.resendDisabled = true;
    this.resendCountdown = 300;

    this.countdownInterval = setInterval(() => {
      this.resendCountdown--;

      if (this.resendCountdown <= 0) {
        this.resendDisabled = false;
        clearInterval(this.countdownInterval);
      }
    }, 1000);
  }

  getCountdownText(): string {
    const minutes = Math.floor(this.resendCountdown / 60);
    const seconds = this.resendCountdown % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  showSuccess(message: string) {
    this.toastr.success(message);
  }
  showError(message: string) {
    this.toastr.error(message);
  }
  showErrorHint(message: string, hint: string) {
    this.toastr.error(hint, message);
  }
}

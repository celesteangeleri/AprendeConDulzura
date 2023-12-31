import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToPerfil() {
    this.router.navigate(['/perfil']);
  }

  goToLandingCourses() {
    this.router.navigate(['/landinCourses']);
  }
  goToHome() {
    this.router.navigate(['']);
  }
  goToAboutUs() {
    this.router.navigate(['/aboutUs']);
  }
}


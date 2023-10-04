import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
})
export class NavbarComponent {
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

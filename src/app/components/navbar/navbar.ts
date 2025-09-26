import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  isMenuOpen = false;
  scrolled = false;
  activeSection: string = 'hero'; // default section

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // ✅ Detect scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;

    // ✅ Detect active section
    const sections = ['hero', 'about', 'projects', 'contact'];
    for (let sec of sections) {
      const el = document.getElementById(sec);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeSection = sec;
          break;
        }
      }
    }
  }
}

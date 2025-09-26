import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxParticlesModule } from '@tsparticles/angular';
import { SplashScreenComponent } from './splash-screen/splash-screen';
import { AboutComponent } from './components/about/about';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './components/background/background';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SplashScreenComponent,
    NgxParticlesModule,
    Navbar,
    Hero,
    AboutComponent,
    Projects,

    Footer,
    CommonModule,
    BackgroundComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
    ngOnInit(): void {
    // أول ما الصفحة تفتح نمنع الانيميشن
    document.body.classList.add('no-anim');
  }
}

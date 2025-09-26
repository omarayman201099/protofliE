import { Component, AfterViewInit } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-hero',
  imports: [LottieComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  standalone: true
})
export class Hero implements AfterViewInit {
  ngAfterViewInit() {
    const el = document.getElementById('typewriter');
    if (el) {
      const typewriter = new Typewriter(el, {
        loop: true,
        delay: 65,
      });

      typewriter
        .typeString('Welcome to my Portfolio')
        .pauseFor(1500)
        .deleteAll()
        .typeString('I am a Frontend Developer')
        .pauseFor(1500)
        .deleteAll()
        .start();
    }
  }

  options: AnimationOptions = {
    path: '/assets/XcnEYeSsTX.json',
    loop: true,
    autoplay: true,
  };
}

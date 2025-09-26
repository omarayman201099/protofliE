import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background',
  standalone: true,
  templateUrl: './background.html',
  styleUrls: ['./background.css'],
  imports: [CommonModule]
})
export class BackgroundComponent implements OnInit, OnDestroy {
  bubbles = Array.from({ length: 8 }, (_, i) => i);

  private scrollY = 0;
  private animationFrame: number | null = null;

  // الموضع الحالي لكل كورة
  positions = this.bubbles.map(() => ({ x: 0, y: 0 }));

  // الهدف اللي المفروض توصل له
  targets = this.bubbles.map(() => ({ x: 0, y: 0 }));

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;

    // نحسب target جديد
    this.bubbles.forEach((_, i) => {
      const directionX = i % 2 === 0 ? 1 : -1;
      const directionY = i % 3 === 0 ? 1 : -1;

      this.targets[i].x = this.scrollY * 0.8 * directionX * (1 + i * 0.2);
      this.targets[i].y = this.scrollY * 0.5 * directionY * (1 + i * 0.1);
    });
  }

  getTransform(index: number) {
    const pos = this.positions[index];
    return `translate(${pos.x}px, ${pos.y}px)`;
  }

  animate = () => {
    this.bubbles.forEach((_, i) => {
      const pos = this.positions[i];
      const target = this.targets[i];

      // lerp (بطيئة لحد ما توقف)
      pos.x += (target.x - pos.x) * 0.05;
      pos.y += (target.y - pos.y) * 0.05;
    });

    this.animationFrame = requestAnimationFrame(this.animate);
  };

  ngOnInit() {
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
}

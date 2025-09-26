import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('.animate-left, .animate-right, .animate-up')
    );

    sections.forEach((el, i) => {
      el.dataset['animIndex'] = String(i);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (!el) return;

          const idx = Number(el.dataset['animIndex'] ?? 0);
          const delay = Math.min(idx * 120, 480); // 120ms لكل عنصر، max 480ms

          if (entry.isIntersecting) {
            el.style.animationDelay = `${delay}ms`;
            el.classList.add('show');
          } else {
            el.classList.remove('show');
            el.style.animationDelay = '';
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    sections.forEach((sec) => observer.observe(sec));
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-splash-screen',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './splash-screen.html',
  styleUrls: ['./splash-screen.css'],
})
export class SplashScreenComponent implements OnInit {
 screenExit = false; // <-- هو ده اللي هنستخدمه في الـ HTML

  ngOnInit(): void {
    setTimeout(() => {
      // أولاً: نشيل no-anim
      document.body.classList.remove('no-anim');

      // ثانياً: بعد شوية صغيرين نبدأ خروج السبلاش
      setTimeout(() => {
        this.screenExit = true;
      }, 100);
    }, 4500); // مدة بقاء السبلاش
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  activeTab: string = 'projects';

  setActive(tab: string) {
    this.activeTab = tab;
  }

  projects = [
    {
      title: 'Mealify',
      description: 'Modern food ordering website',
      link: 'https://omarayman201099.github.io/Mealify/',
      image: 'assets/projects-photo/Screenshot-2025-09-19-171646.png',
      tags: ['Angular', 'TypeScript', 'Frontend']
    },
    {
      title: 'DevFolio',
      description: 'the First website using bootstrpa',
      link: 'https://omarayman201099.github.io/DevFolio/',
      image: 'assets/projects-photo/devflio.png',
      tags: ['HTML', 'CSS', 'bootstrap', 'JavaScript']
    },
    {
      title: 'Portfolio',
      description: 'Personal showcase portfolio',
      link: 'https://omarayman201099.github.io/test-/',
      image: 'assets/projects-photo/protoflio.png',
      tags: ['HTML', 'CSS', 'Tailwind', 'JavaScript']
    },
    {
      title: 'Smart-login',
      description: 'Login and registration form',
      link: 'https://omarayman201099.github.io/smart-login/',
      image: 'assets/projects-photo/smart-login.png',
      tags: ['HTML', 'CSS', 'Tailwind', 'JavaScript']
    },
    {
      title: 'ingredins menu  ',
      description: 'Restaurant menu design',
      link: 'https://omarayman201099.github.io/test-js-/#',
      image: 'assets/projects-photo/menu.png',
      tags: ['HTML', 'CSS', 'Tailwind', 'JavaScript']
    },
    {
      title: 'Gaame-oop',
      description: 'Game store website using api and oop concept',
      link: 'https://omarayman201099.github.io/Gaame-oop/',
      image: 'assets/projects-photo/Gameoop.png',
      tags: ['Html', 'Bootstrap','css','oop', 'API']
    },
    {
      title: 'Weather-app',
      description: 'Weather app using api',
      link: 'https://benevolent-caramel-966409.netlify.app/',
      image: 'assets/projects-photo/WEATHER.png',
      tags: ['Angular','Tailwind','TS', 'API']
    },
    {
      title: 'E-commerce',
      description: 'E-commerce website using api and oop concept',
      link: 'https://timely-centaur-cf36c7.netlify.app/Log%20in',
      image: 'assets/projects-photo/E-coomer.png',
      tags: ['Angular','Tailwind','TS', 'API']
    },
  ];

  techStack = [
    { name: 'Angular', icon: 'assets/icons/angualr.svg' },
    { name: 'TypeScript', icon: 'assets/icons/typescript-svgrepo-com.svg' },
    { name: 'Tailwind Css', icon: 'assets/icons/taliwand.svg' },
    { name: 'Bootstrap', icon: 'assets/icons/bootstrap.svg' },
    { name: 'CSS', icon: 'assets/icons/css.svg' },
    { name: 'JavaScript', icon: 'assets/icons/js.svg' },
    { name: 'HTML', icon: 'assets/icons/html.svg' },
  ];
}

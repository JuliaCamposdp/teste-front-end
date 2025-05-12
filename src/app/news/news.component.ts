import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { News } from '../news';
import { Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [CommonModule, RouterModule, RouterLink, RouterOutlet],
  template: `
    <section class="listing">
      <img
        class="listing-image"
        [src]="news.image"
        alt="Imagem da notícia: {{ news.title }}"/>
      <h2 class="listing-title">{{ news.title }}</h2>
      <p class="listing-noticias"> {{ news.body | slice:0:150 }}</p>
      <a class="read-more" [routerLink]="['/details', news.id]">Ler mais</a>
    </section>
  `,
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  @Input() news!: News;
}

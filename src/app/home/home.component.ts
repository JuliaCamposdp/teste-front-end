import { Component, inject, Inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { NewsComponent } from '../news/news.component';
import { News } from '../news';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NewsComponent],
  template: `
 <div class="container">
  <div class="content">
     <app-news *ngFor="let news of newsList" [news]="news"></app-news>
  </div>
  <aside class="sidebar">
    <div class="categorias">
      <h3>Categorias</h3>
      <ul>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
      </ul>
    </div>
   <div class="pesquisa">
      <h4>Procurando alguma notícia?</h4>
      <div class="barra-pesquisa">
        <input type="text" placeholder="Pesquisar por..." />
        <i class="fas fa-search"></i>
      </div>
    </div>
  </aside>
</div>

  `,
   styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  newsList: News[] = [];
  noticiasService: NoticiasService = inject(NoticiasService);

  constructor() {
    this.newsList = this.noticiasService.getAllNews();
  }
}





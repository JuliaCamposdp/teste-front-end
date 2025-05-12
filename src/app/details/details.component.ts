import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { NoticiasService } from '../noticias.service';
import { News } from '../news';

@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <article>
      <section class="listing-description">
      <div class="heading">
        <h3 class="listing-title">{{ news?.title }}</h3>
        <h5 class="listing-date">Publicado em: {{news?.createdAt}}</h5>
      </div>
       <div class="content">
        <img
        class="listing-image"
        [src]="news?.image"
        alt="Imagem da notícia: {{ news?.title }}"
      />
       <p class="listing-body">{{ news?.body }}</p>
      </div>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  noticiasService = inject(NoticiasService);
  news: News | undefined;
  constructor() {
  const newsId = String(this.route.snapshot.params['id']);
  this.news = this.noticiasService.getNewsById(newsId);
         }
}

import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {DetailsComponent} from './details/details.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routeConfig: Routes = [
    {
    path: '',
    component: HomeComponent,
    title: 'Resultados de busca',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Notícia Completa',
  },
  {
    path: '',
    component: CreatePostComponent,
    title: 'Cadastrar nova notícia',
  }
];
export default routeConfig;
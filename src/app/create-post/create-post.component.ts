import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  imports: [],
  template: `
    <section class="form-container">
  <h2 class="form-title">Criar Nova Notícia</h2>

  <form>
    <label for="title">Título</label>
    <input id="title" type="text" formControlName="title" required />

    <label for="image">Imagem (URL)</label>
    <input id="image" type="url" formControlName="image" required />

    <label for="body">Conteúdo</label>
    <textarea id="body" rows="6" formControlName="body" required></textarea>

    <label for="createdAt">Data de Publicação</label>
    <input id="createdAt" type="date" formControlName="createdAt" />

    <button type="submit">Salvar</button>
  </form>
</section>
  `,
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {

}

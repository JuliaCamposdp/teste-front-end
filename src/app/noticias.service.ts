import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  newsList: News[] = [
      {
      "createdAt": "2022-11-15T03:06:57.489Z",
      "title": "Teste 2",
      "image": "https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg",
      "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "id": "2"
    },
    {
      "createdAt": "2022-11-14T18:39:34.095Z",
      "title": "Teste 3",
      "image": "https://prefeitura.rio/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-16-at-16.42.03.jpeg",
      "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n",
      "id": "3"
    },
    {
      "createdAt": "2022-11-15T16:15:03.167Z",
      "title": "teste 4",
      "image": "https://i.pinimg.com/236x/f6/61/cc/f661cc5c835f97eeb28c3ea16a01e6ec.jpg",
      "body": "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.",
      "id": "5"
    },
    {
      "createdAt": "2022-11-15T23:21:06.765Z",
      "title": "teste marlin marlin",
      "image": "https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg",
      "body": "123",
      "id": "7"
    },
    {
      "createdAt": "2022-11-16T18:15:53.686Z",
      "title": "teste marlin",
      "image": "https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg",
      "body": "teste marlin",
      "id": "8"
    },
    {
      "createdAt": "2022-11-16T01:45:35.611Z",
      "title": "Atque rem voluptatem.",
      "image": "http://loremflickr.com/640/480/fashion",
      "body": "Neque numquam quae omnis et dolorem et numquam. Neque repellat quo quos aliquid pariatur non nihil. Hic omnis autem. Ut ea vitae ut. Voluptatum reiciendis laborum eos laborum officia voluptatem.",
      "id": "9"
    },
    {
      "createdAt": "2022-11-16T21:14:51.726Z",
      "title": "Vitae dolores nulla aspernatur.",
      "image": "http://loremflickr.com/640/480/food",
      "body": "Est blanditiis rerum veritatis corrupti id. Iste excepturi laboriosam excepturi qui deserunt molestiae at. Ipsum est et temporibus ea et. Eius minus tenetur tempora corporis atque et inventore animi nobis.",
      "id": "10"
    },
    {
      "createdAt": "2022-11-16T15:32:04.102Z",
      "title": "Non occaecati animi minima nulla odio.",
      "image": "http://loremflickr.com/640/480/sports",
      "body": "Molestiae mollitia quaerat iure doloribus deserunt saepe corrupti fugiat dolorem. Rerum ut ea repellat perferendis earum aut. Animi possimus incidunt voluptatem facilis non perspiciatis eos inventore et. Impedit officiis voluptas inventore fugit dolor.",
      "id": "11"
    },
    {
      "createdAt": "2022-11-16T03:24:50.069Z",
      "title": "Ut quia dolorum est repellat sapiente necessitatibus aliquid maxime sed.",
      "image": "http://loremflickr.com/640/480/nature",
      "body": "Cupiditate quam accusantium ut explicabo aut non fuga rem. Aut sint eos doloribus et corporis occaecati sed. Praesentium ipsa qui aut modi et doloremque quia eius praesentium. Qui vero ratione et rerum dolor. In id tenetur ut voluptas nostrum et molestiae et iusto.",
      "id": "12"
    },
    {
      "createdAt": "2022-11-16T05:58:44.309Z",
      "title": "Beatae sequi ab est occaecati eius ea sed ut voluptatibus.",
      "image": "http://loremflickr.com/640/480/technics",
      "body": "Hic dolores dignissimos id excepturi. Aut voluptates numquam et tempore possimus aut. Numquam sint officiis voluptatem. Tempore quaerat ut voluptas non. Doloribus voluptas pariatur perferendis expedita excepturi earum quia vitae qui.",
      "id": "13"
    },
    {
      "createdAt": "2022-11-16T03:40:28.820Z",
      "title": "Quia alias dolor.",
      "image": "http://loremflickr.com/640/480/food",
      "body": "Quo id dolores tempore eligendi quod dolor. Perferendis animi neque dolores et ad possimus. Id molestiae ut fugiat reprehenderit.",
      "id": "14"
    },
    {
      "createdAt": "2022-11-16T09:23:48.173Z",
      "title": "Magnam tenetur rem deserunt et mollitia.",
      "image": "http://loremflickr.com/640/480/business",
      "body": "Qui maiores asperiores assumenda ipsam ut aspernatur optio blanditiis. Quia et nulla quia ea. Nostrum natus rerum id unde.",
      "id": "15"
    },
    {
      "createdAt": "2022-11-16T14:38:30.811Z",
      "title": "Delectus molestias labore dolores dolores sed eaque aperiam.",
      "image": "http://loremflickr.com/640/480/nightlife",
      "body": "Excepturi consequatur consequatur. Veniam quam eveniet corporis ut sint. Cupiditate quasi sit et dolorum consequuntur voluptas. Molestiae nesciunt dolor.",
      "id": "16"
    },
    {
      "createdAt": "2022-11-16T14:21:43.249Z",
      "title": "Dignissimos voluptas et a qui nam distinctio.",
      "image": "http://loremflickr.com/640/480/fashion",
      "body": "Aperiam sint numquam illum quia. Aut est ex recusandae. Ipsum similique pariatur iusto. Perspiciatis et consequatur dolorem distinctio ratione aut similique sint.",
      "id": "17"
    },
    {
      "createdAt": "2022-11-16T01:35:11.336Z",
      "title": "Eius eum minus at dolorem soluta neque.",
      "image": "http://loremflickr.com/640/480/city",
      "body": "Inventore non corrupti impedit fugiat autem. Quisquam rem sit iste eos minus sit ratione omnis. Aut quia quam id sed occaecati nostrum sed occaecati quam. Officiis expedita pariatur inventore amet velit reiciendis nihil. Dolores ut magnam quia aliquid quo qui ea.",
      "id": "18"
    },
    ]
  constructor() { }
  getAllNews(): News[] {
    return this.newsList;
  }
  getNewsById(id: string): News | undefined {
    return this.newsList.find((news) => news.id === id);
  } 
}

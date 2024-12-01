import { Component, OnInit } from '@angular/core';
import { article, articlelist, articlelist2 } from './models/article';
import { ArticleSectionComponent } from './components/article-section/article-section.component';
import { CategoriesComponent } from './components/categories/categories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArticleSectionComponent,CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.createTickets();
    this.createTickets2();
  }

  articles: article[] = articlelist;
  article2: article[] = articlelist2;

  createTickets() {
    const ticketTitles = [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    ];

    for (let i = 0; i < 3; i++) {
      const title = ticketTitles[i % ticketTitles.length];
      const photo = `https://tse4.mm.bing.net/th?id=OIP.SIe1AOU6gEfWncCrGjHeAgHaFj&pid=Api&P=0&h=220`;
      const datetime = new Date(
        new Date().getTime() + Math.random() * (30 * 24 * 60 * 60 * 1000)
      );
      const ticket = new article(title, photo, datetime);
      articlelist.push(ticket);
    }
  }
  createTickets2() {
    const ticketTitles = [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    ];

    for (let i = 0; i < 2; i++) {
      const title = ticketTitles[i % ticketTitles.length];
      const photo = `https://tse2.mm.bing.net/th?id=OIP.xKm1pZddIgn-5N5e_TSVKQHaE8&pid=Api&P=0&h=220`;
      const datetime = new Date(
        new Date().getTime() + Math.random() * (30 * 24 * 60 * 60 * 1000)
      );
      const ticket = new article(title, photo, datetime);
      articlelist2.push(ticket);
    }
  }
}
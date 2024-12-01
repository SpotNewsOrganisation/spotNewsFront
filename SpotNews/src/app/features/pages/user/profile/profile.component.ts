import { Component } from '@angular/core';
import { ArticlesComponent } from '../../../shared/home/articles/articles.component';
import { ArticleSectionComponent } from "../../home/components/article-section/article-section.component";
import { article, articlelist } from '../../home/models/article';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ArticleSectionComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  ngOnInit(): void {
    this.createTickets();
  }

  articles: article[] = articlelist;

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
}

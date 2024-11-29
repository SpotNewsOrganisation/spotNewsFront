import { Component, OnInit } from '@angular/core';
import { article, articlelist } from './models/article';
import { ArticleSectionComponent } from './components/article-section/article-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArticleSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.createTickets();
  }

  articles: article[] = articlelist;

  createTickets() {
    const ticketTitles = [
      'დაგდაგანი',
      'Tyga',
      'Chris Botii',
      'ნიაზ დიასამიძე',
      'Data Fest',
    ];

    for (let i = 0; i < 15; i++) {
      const title = ticketTitles[i % ticketTitles.length];
      const photo = `https://res.cloudinary.com/ds1q7oiea/image/upload/v1728835003/hof7spu2fdv35czyq3zf.webp`;
      const datetime = new Date(
        new Date().getTime() + Math.random() * (30 * 24 * 60 * 60 * 1000)
      );
      const price = (Math.random() * (100 - 20) + 20).toFixed(2);
      const ticket = new article(title, photo, datetime);
      articlelist.push(ticket);
    }
  }
}
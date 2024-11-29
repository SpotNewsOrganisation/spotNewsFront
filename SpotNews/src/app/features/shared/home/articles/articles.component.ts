import { Component, Input } from '@angular/core';
import { article } from '../../../pages/home/models/article';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  @Input()
  articles!: article;
}

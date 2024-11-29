import { Component, Input, input } from '@angular/core';
import { ArticlesComponent } from '../../../../shared/home/articles/articles.component';
import { article } from '../../models/article';

@Component({
  selector: 'app-article-section',
  standalone: true,
  imports: [ArticlesComponent],
  templateUrl: './article-section.component.html',
  styleUrl: './article-section.component.scss'
})
export class ArticleSectionComponent {
  @Input()
  articles: article[] = [];
}

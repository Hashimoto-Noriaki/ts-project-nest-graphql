import { Injectable } from '@nestjs/common';
import { Article } from './models/article.model';

@Injectable()
export class ArticleService {
  articles: Article[] = [];
  getArticles(): Article[] {
    const article1 = new Article();
    article1.id = 1;
    article1.title = '記事1';
    article1.url =
      'https://qiita.com/Hashimoto-Noriaki/items/791de3398c8f1346f1c7';
    article1.description = '技術選定';
    article1.tags = ['NestJS', 'GraphQL', 'TypeScript'];
    article1.createdAt = new Date();
    article1.updatedAt = new Date();
    article1.deletedAt = null;
    this.articles.push(article1);
    return this.articles;
  }
}

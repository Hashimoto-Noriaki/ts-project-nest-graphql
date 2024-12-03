import { Query, Resolver } from '@nestjs/graphql';
import { Article } from './models/article.model';
import { ArticleService } from './article.service';

@Resolver(() => Article)
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  @Query(() => [Article], { nullable: 'items' }) // nullable: 'items' はリスト内の各アイテムがnull許容である場合に使用
  getArticles(): Article[] {
    return this.articleService.getArticles();
  }
}

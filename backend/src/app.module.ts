import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ArticleModule } from './article/article.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    //forRootはアプリ全体に適用するためのメソッド
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, //driverサーバーを使用
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), //コードファーストで進める際にnest.jsから自動生成されるスキーマファイルの指定
    }),
    ArticleModule,
    PrismaModule,
  ],
})
export class AppModule {}

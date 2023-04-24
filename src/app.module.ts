import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StaysModule } from './stays/stays.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://leoch:W5qowuniveje@cluster0.lh931rq.mongodb.net/tremiaire-app?retryWrites=true&w=majority'
    ),
    StaysModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { }

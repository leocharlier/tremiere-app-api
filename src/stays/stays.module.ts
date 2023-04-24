import { Module } from '@nestjs/common';
import { StaysService } from './stays.service';
import { StaysController } from './stays.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StaySchema } from '../schemas/stay.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Stay', schema: StaySchema }])],
  controllers: [StaysController],
  providers: [StaysService]
})
export class StaysModule {}

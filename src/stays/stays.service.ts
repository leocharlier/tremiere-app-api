import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stay } from '../models/stay.model';
import { CreateStayDto } from './dto/create-stay.dto';
import { UpdateStayDto } from './dto/update-stay.dto';

@Injectable()
export class StaysService {

  constructor(@InjectModel('Stay') private stayModel: Model<Stay>) {}

  async create(createStayDto: CreateStayDto): Promise<Stay> {
    const createdCat = new this.stayModel(createStayDto);
    return createdCat.save();
  }

  findAll() {
    return `This action returns all stays`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stay`;
  }

  update(id: number, updateStayDto: UpdateStayDto) {
    return `This action updates a #${id} stay`;
  }

  remove(id: number) {
    return `This action removes a #${id} stay`;
  }
}

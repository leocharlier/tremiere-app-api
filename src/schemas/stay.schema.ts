import { Schema } from 'mongoose';
import { STAY_STATUSES } from '../domains/stay-status.domain';

export const StaySchema = new Schema({
  status: { type: String, enum: [...STAY_STATUSES], required: true },
  start_date: { type: String, required: true },
  end_date: { type: String, required: true },
  name: { type: String, required: true }
}, { versionKey: false });
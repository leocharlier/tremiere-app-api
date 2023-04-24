import { StayStatus } from '../domains/stay-status.domain';

export interface Stay extends Document {
    status: StayStatus;
    start_date: string;
    end_date: string;
}
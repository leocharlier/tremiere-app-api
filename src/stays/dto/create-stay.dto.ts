import { StayStatus } from '../../domains/stay-status.domain';

export class CreateStayDto {
    status: StayStatus;
    start_date: string;
    end_date: string;
}

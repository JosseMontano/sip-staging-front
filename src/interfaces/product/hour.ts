export interface HoursType {
  day: string;
  start_time: string;
  end_time: string;
  company_id: string;
  state: string;
}

export interface GetHoursType {
  id: number;
  day: string;
  start_time: string;
  end_time: string;
  state: string;
  company_id: number;
}

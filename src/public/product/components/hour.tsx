import { HourType } from '../interfaces/company';

interface Params {
  v: HourType;
}

const Hour = ({ v }: Params) => {
  return (
    <p>
      <b>Horarios: </b>
      {v.day + ' ' + v.start_time + ' ' + v.end_time}
    </p>
  );
};

export default Hour;

import { GetHoursType } from "@/interfaces/product/hour";

interface Params {
  v: GetHoursType;
}

const Hour = ({ v }: Params) => {
  return <p>{v.day + " " + v.start_time + " " + v.end_time}</p>;
};

export default Hour;

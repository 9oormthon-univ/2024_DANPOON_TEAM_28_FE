import "./App.css";
import tz from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
import { locale } from "dayjs";
import "dayjs/locale/ko";

function App() {
  dayjs.extend(utc);
  dayjs.extend(tz);
  locale("ko");
  dayjs.tz.setDefault("Asia/Seoul");
  return <div>HelloWorld!</div>;
}

export default App;

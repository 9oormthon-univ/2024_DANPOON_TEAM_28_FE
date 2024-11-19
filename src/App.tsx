import './App.css';
import tz from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
import { locale } from 'dayjs';
import 'dayjs/locale/ko';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

function App() {
    dayjs.extend(utc);
    dayjs.extend(tz);
    locale('ko');
    dayjs.tz.setDefault('Asia/Seoul');
    return <div>라이블리</div>;
}

export default App;

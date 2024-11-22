import { createBrowserRouter, redirect } from 'react-router-dom';
import {
  MissionPage,
  StatusPage,
  MapPage,
  MyPage,
  NotFound,
  SplashPage,
} from './pages';
import InfoPage from './pages/info/InfoPage';
import AlarmPage from './pages/alarm/AlarmPage';
import LoginPage from './pages/login/LoginPage';

export const RouterPath = {
  splash: '/',
  mission: '/mission',
  status: '/status',
  map: '/map',
  info: '/info',
  myPage: '/my-page',
  alarm: '/alarm',
  login: '/login',
  notFound: '*',
};

const router = createBrowserRouter([
  {
    path: RouterPath.splash,
    element: <SplashPage />,
  },
  {
    path: RouterPath.mission,
    element: <MissionPage />,
  },
  {
    path: RouterPath.status,
    element: <StatusPage />,
  },
  {
    path: RouterPath.map,
    element: <MapPage />,
  },
  {
    path: RouterPath.info,
    element: <InfoPage />,
  },
  {
    path: RouterPath.myPage,
    element: <MyPage />,
  },
  {
    path: RouterPath.alarm,
    element: <AlarmPage />,
  },
  {
    path: RouterPath.login,
    element: <LoginPage />,
  },
  {
    path: RouterPath.notFound,
    element: <NotFound />,
  },
]);

export default router;

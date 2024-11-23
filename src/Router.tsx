import { createBrowserRouter } from 'react-router-dom';
import { MissionPage, StatusPage, MyPage, NotFound } from './pages';
import InfoPage from './pages/info/InfoPage';
import AlarmPage from './pages/alarm/AlarmPage';
import MapPage from './pages/map/MapPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MissionPage />,
    },
    {
        path: '/status',
        element: <StatusPage />,
    },
    {
        path: '/map',
        element: <MapPage />,
    },
    {
        path: '/info',
        element: <InfoPage />,
    },
    {
        path: '/my-page',
        element: <MyPage />,
    },
    {
        path: '/alarm',
        element: <AlarmPage />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;

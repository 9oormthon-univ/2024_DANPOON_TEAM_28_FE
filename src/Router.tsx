import { createBrowserRouter } from 'react-router-dom';
import { MissionPage, StatusPage, InfoPage, MyPage, NotFound } from './pages';
import AlarmPage from './pages/alarm/AlarmPage';
import MapPage from './map/MapPage';

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

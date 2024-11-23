import { createBrowserRouter } from 'react-router-dom';
import { StatusPage, MyPage, NotFound } from './pages';
import InfoPage from './pages/info/InfoPage';
import AlarmPage from './pages/alarm/AlarmPage';
import MapPage from './pages/map/MapPage';
import MissionPage from './pages/mission/MissionPage';
import MissionCompletePage from './pages/mission/mission-complete/MissionCompletePage';
import CloverMissionPage from './pages/mission/clover-mission/CloverMissionPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MissionPage />,
    },
    {
        path: '/mission-complete',
        element: <MissionCompletePage />,
    },
    {
        path: '/clover-mission',
        element: <CloverMissionPage />,
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

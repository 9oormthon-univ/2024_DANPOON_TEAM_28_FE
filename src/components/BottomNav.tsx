import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import {
    TrophyIcon,
    StatusIcon,
    MapIcon,
    DocsIcon,
    MyPageIcon,
} from '@/components/Icons';
import { BottomNavStyle, BottomNavActionStyle } from './BottomNav.style';

export default function BottomNav() {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);

    useEffect(() => {
        setSelected(location.pathname);
    }, [location.pathname]);

    return (
        <Paper sx={BottomNavStyle} elevation={3}>
            <BottomNavigation
                showLabels
                value={selected}
                // onChange={(event, newValue) => {
                //     setSelected(newValue);
                // }}
                sx={BottomNavActionStyle}
            >
                <BottomNavigationAction
                    label='미션'
                    icon={<TrophyIcon />}
                    component={Link}
                    to='/'
                    value='/'
                />
                <BottomNavigationAction
                    label='분석'
                    icon={<StatusIcon />}
                    component={Link}
                    to='/status'
                    value='/status'
                />
                <BottomNavigationAction
                    label='지도'
                    icon={<MapIcon />}
                    component={Link}
                    to='/map'
                    value='/map'
                />
                <BottomNavigationAction
                    label='게시판'
                    icon={<DocsIcon />}
                    component={Link}
                    to='/info'
                    value='/info'
                />
                <BottomNavigationAction
                    label='마이 페이지'
                    icon={<MyPageIcon />}
                    component={Link}
                    to='/my-page'
                    value='/my-page'
                />
            </BottomNavigation>
        </Paper>
    );
}

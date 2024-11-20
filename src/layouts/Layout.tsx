import BottomNav from '@/components/BottomNav';
import { Container, SxProps } from '@mui/material';
import React from 'react';

const Layout = ({
    children,
    sx,
    removePadding = false,
    removeBottomNavigation = false,
}: {
    children: React.ReactNode;
    sx?: SxProps;
    removePadding?: boolean;
    removeBottomNavigation?: boolean;
}) => {
    return (
        <Container
            maxWidth={'md'}
            sx={{
                overflowX: 'hidden',
                backgroundColor: 'background.default',
                p: removePadding ? 0 : 2,
                ...sx,
            }}
        >
            {children}
            {!removeBottomNavigation && <BottomNav />}
        </Container>
    );
};

export default Layout;
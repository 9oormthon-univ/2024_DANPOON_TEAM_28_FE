import BottomNav from '@/components/BottomNav';
import { Container, SxProps } from '@mui/material';
import React from 'react';

export interface ILayoutProps {
    children: React.ReactNode;
    sx?: SxProps;
    removePadding?: boolean;
    removeBottomNavigation?: boolean;
}

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
            maxWidth={'sm'}
            sx={{
                overflowX: 'hidden',
                backgroundColor: 'background.default',
                px: removePadding ? 0 : 2,
                position: 'relative',
                ...sx,
            }}
            disableGutters
        >
            {children}
            {!removeBottomNavigation && <BottomNav />}
        </Container>
    );
};

export default Layout;

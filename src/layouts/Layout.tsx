import { Container, SxProps } from '@mui/material';
import React from 'react';

const Layout = ({
    children,
    padding,
    sx,
}: {
    children: React.ReactNode;
    padding?: number;
    sx?: SxProps;
}) => {
    return (
        <Container
            maxWidth={'md'}
            sx={{
                overflowX: 'hidden',
                backgroundColor: 'background.default',
                p: padding || 0,
                ...sx,
            }}
        >
            {children}
        </Container>
    );
};

export default Layout;

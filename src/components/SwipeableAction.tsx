import { Box, Stack, SxProps, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import * as style from './SwipeableAction.style';

const SwipeableAction = ({
    children,
    onSwipeLeft,
    backgroundComponent,
    sx,
}: {
    children: React.ReactNode;
    onSwipeLeft: () => void;
    backgroundComponent?: React.ReactNode;
    sx?: SxProps;
}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDragEnd = (_: MouseEvent, info: any) => {
        if (info.offset.x <= -60) {
            onSwipeLeft();
        }
    };

    return (
        <Box
            sx={{
                position: 'relative',
                ...sx,
            }}
        >
            {backgroundComponent || (
                <Stack
                    justifyContent={'center'}
                    alignItems={'center'}
                    sx={style.deleteButtonStyle}
                >
                    <Typography>삭제</Typography>
                </Stack>
            )}
            <Box
                component={motion.div}
                sx={{
                    zIndex: 100,
                    position: 'relative',
                }}
                drag='x'
                dragConstraints={{ left: -60, right: 0 }}
                onDragEnd={handleDragEnd}
                dragTransition={{ bounceStiffness: 250, bounceDamping: 50 }}
                dragSnapToOrigin={true}
                dragElastic={0}
            >
                {children}
            </Box>
        </Box>
    );
};

export default SwipeableAction;

import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { KakaoIcon } from '@/components/Icons';
import * as style from './KakaoLoginBtn.style';

interface IKakaoLoginBtnProps {
    onClick?: () => void;
}

const KakaoLoginBtn:  React.FC<IKakaoLoginBtnProps> = ({ onClick }) => {
    return (
        <Button variant='contained' sx={style.buttonStyle} onClick={onClick}>
            <Box component='span' sx={style.boxStyle}>
                <KakaoIcon sx={style.iconStyle} />
                <Typography variant='body3Regular'>
                    카카오로 계속하기
                </Typography>
            </Box>
        </Button>
    );
};

export default KakaoLoginBtn;

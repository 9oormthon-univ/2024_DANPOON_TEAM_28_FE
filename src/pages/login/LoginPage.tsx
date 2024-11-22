import { Paper, Typography, Link, Box } from '@mui/material';
import KakaoLoginBtn from './KakaoLoginBtn';
import Logo from '@/components/Logo';
import * as style from './LoginPage.style';

const LoginPage = () => {
    return (
        <Box sx={style.rootBoxStyle}>
            <Paper sx={style.paperStyle}>
                <Box sx={style.logoBoxStyle}>
                    <Typography
                        variant='heading1Medium'
                        sx={style.heading1Style}
                    >
                        세상 밖으로 한 발짝
                    </Typography>
                    <Logo size='large' showName={true} />
                    <Typography
                        variant='heading2Light'
                        sx={style.heading2Style}
                    >
                        라이블리와 함께라면 <br />
                        어디서든 <br />
                        행복을 찾을 수 있어요
                    </Typography>
                </Box>

                <Box sx={style.buttonBoxStyle}>
                    <KakaoLoginBtn
                        onClick={() => {
                            alert('카카오 로그인 시도!');
                        }}
                    />
                </Box>

                <Link
                    href='https://open.kakao.com/o/sGX2kv1g'
                    underline='none'
                    sx={style.linkStyle}
                >
                    문의하기
                </Link>
            </Paper>
        </Box>
    );
};

export default LoginPage;

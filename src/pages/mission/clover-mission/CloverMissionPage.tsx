import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Layout from '@/layouts/Layout';
import { Stack, Typography } from '@mui/material';

const CloverMissionPage = () => {
    return (
        <Layout>
            <Stack direction={'column'} alignItems={'center'}>
                <Header />
                <Typography
                    variant={'heading1Medium'}
                    color={'livelyPrimary.1'}
                    align={'center'}
                    sx={{
                        wordBreak: 'keep-all',
                    }}
                >
                    오늘은 어떤 클로버 미션에 도전할까요?
                </Typography>
                <Logo size={'large'} showName={false} />
            </Stack>
        </Layout>
    );
};

export default CloverMissionPage;

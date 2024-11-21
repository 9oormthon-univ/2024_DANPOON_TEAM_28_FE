import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { ViewCountIcon } from '@/components/Icons';

interface ICardProps {
    title: string;
    date: Date;
    view: number;
    image: string;
}

export default function InfoCard({
    title='예시 타이틀',
    date = new Date('2000-01-01'),
    view = 0,
    image = 'http://via.placeholder.com/640x480',
}: ICardProps) {
    return (
        <Card
            sx={{
                maxWidth: 345,
                borderRadius: 4,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
            }}
        >
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{ height: 150 }}
            />

            <CardContent>
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 1 }}
                >
                    {title}
                </Typography>

                <Typography variant="body2" sx={{ color: '#666', marginBottom: 1 }}>
                    {date.toLocaleDateString()} {/* 날짜 형식화 */}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ViewCountIcon
                        style={{ width: 20, height: 20 }}
                    />
                    <Typography variant="body2" sx={{ color: '#666' }}>
                        {view.toLocaleString()} {/* 조회수 숫자 형식화 */}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

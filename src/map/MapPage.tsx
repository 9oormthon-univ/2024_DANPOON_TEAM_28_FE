import Layout from '@/layouts/Layout';
import { Divider, Stack } from '@mui/material';
import { useEffect } from 'react';

interface IMarker {
    lat: number;
    lng: number;
    title: string;
}

const MapPage = () => {
    const markerData: Array<IMarker> = [
        { lat: 37.5665, lng: 126.978, title: '마커 1' },
        { lat: 37.5675, lng: 126.979, title: '마커 2' },
        { lat: 37.5685, lng: 126.98, title: '마커 3' },
    ];
    useEffect(() => {
        // Kakao 지도 SDK 로드 함수
        const loadKakaoMap = () => {
            if (window.kakao && window.kakao.maps) {
                initializeMap(); // 이미 로드된 경우 바로 초기화
                return;
            }

            const script = document.createElement('script');
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_APP_JS_KEY}&autoload=false`;
            script.onload = () => {
                if (window.kakao && window.kakao.maps) {
                    window.kakao.maps.load(initializeMap); // SDK 로드 후 초기화
                }
            };
            script.onerror = () => {
                console.error('Kakao 지도 SDK 로드 실패');
            };
            document.head.appendChild(script);
        };

        const initializeMap = () => {
            const container = document.getElementById('map');
            if (!container) {
                console.error('맵 컨테이너를 찾을 수 없습니다.');
                return;
            }

            const options = {
                center: new window.kakao.maps.LatLng(37.5665, 126.978), // 지도 중심 좌표
                level: 3, // 확대 레벨
            };

            const map = new window.kakao.maps.Map(container, options);

            // 마커 데이터 기반으로 마커 생성
            markerData.forEach((markerInfo) => {
                const markerPosition = new window.kakao.maps.LatLng(
                    markerInfo.lat,
                    markerInfo.lng
                );

                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                });

                marker.setMap(map);

                // 마커에 정보창 추가
                const infowindow = new window.kakao.maps.InfoWindow({
                    content: `<div style="padding:5px;">${markerInfo.title}</div>`,
                });

                // 마커에 마우스 오버 이벤트 추가
                window.kakao.maps.event.addListener(marker, 'mouseover', () => {
                    infowindow.open(map, marker);
                });

                // 마커에 마우스 아웃 이벤트 추가
                window.kakao.maps.event.addListener(marker, 'mouseout', () => {
                    infowindow.close();
                });
            });
        };

        loadKakaoMap();
    }, []);
    // 37.5648926,127.0866036
    return (
        <Layout removePadding>
            <div
                id='map'
                style={{
                    width: '100%',
                    height: '100vh',
                    border: '1px solid #ddd',
                }}
            />
            <Stack
                sx={{
                    width: '100%',
                    height: '16.25rem',
                    zIndex: 200,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    padding: '1rem',
                }}
            >
                <Divider />
            </Stack>
        </Layout>
    );
};

export default MapPage;

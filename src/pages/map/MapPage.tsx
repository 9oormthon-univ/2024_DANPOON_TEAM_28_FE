import Layout from '@/layouts/Layout';
import { Divider, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { placeData } from '@/constants/mapConstants';
import { IPlaceData } from '@/types/IPlaceData';

import default_marker from '@/assets/map/default_marker.svg';
import selected_marker from '@/assets/map/selected_marker.svg';
import UnSelectedUi from './UnSelectedUi';
import SelectedUi from './SelectedUi';

const MapPage = () => {
    const [selected, setSelected] = useState<IPlaceData | null>(null);
    const [markers, setMarkers] = useState<Record<string, any>>({});
    const [_, setMap] = useState<any>(null); // Kakao 지도 객체 저장

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
                center: new window.kakao.maps.LatLng(37.541581, 127.103859), // 지도 중심 좌표
                level: 8, // 확대 레벨
            };

            const kakaoMap = new window.kakao.maps.Map(container, options);
            setMap(kakaoMap); // 지도 객체 저장

            const newMarkers: Record<string, any> = {};

            // 마커 데이터 기반으로 마커 생성
            placeData.forEach((markerInfo) => {
                const markerPosition = new window.kakao.maps.LatLng(
                    markerInfo.lat,
                    markerInfo.lng
                );

                const markerImage = new window.kakao.maps.MarkerImage(
                    default_marker, // 기본 이미지
                    new window.kakao.maps.Size(40, 40),
                    { offset: new window.kakao.maps.Point(20, 40) }
                );

                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage,
                });

                marker.setMap(kakaoMap);

                // 마커 객체 저장
                newMarkers[markerInfo.placeName] = marker;

                // 마커 클릭 이벤트
                window.kakao.maps.event.addListener(marker, 'click', () => {
                    setSelected(markerInfo); // 클릭된 마커 정보를 상태로 설정
                    kakaoMap.setCenter(markerPosition); // 클릭된 마커를 중심으로 지도 이동
                });
            });

            // 지도 클릭 이벤트 추가
            window.kakao.maps.event.addListener(kakaoMap, 'click', () => {
                setSelected(null); // 선택 초기화
            });

            setMarkers(newMarkers);
        };

        loadKakaoMap();
    }, []);

    useEffect(() => {
        // 선택된 마커 UI 업데이트
        Object.keys(markers).forEach((placeName) => {
            const marker = markers[placeName];
            if (!marker) return;

            // 선택된 마커는 selected_marker, 나머지는 default_marker로 업데이트
            const isSelected = selected && selected.placeName === placeName;
            const newImage = new window.kakao.maps.MarkerImage(
                isSelected ? selected_marker : default_marker, // 선택된 이미지와 기본 이미지
                new window.kakao.maps.Size(
                    isSelected ? 36 : 40,
                    isSelected ? 50 : 40
                ),
                { offset: new window.kakao.maps.Point(20, 40) }
            );
            marker.setImage(newImage);
        });
    }, [selected, markers]);

    return (
        <Layout removePadding removeBottomNavigation={!!selected}>
            {/* 지도 영역 */}
            <div
                id='map'
                style={{
                    width: '100%',
                    height: '100vh',
                    border: '1px solid #ddd',
                }}
            />

            {/* 하단 정보 표시 영역 */}

            {selected ? <SelectedUi {...selected} /> : <UnSelectedUi />}
        </Layout>
    );
};

export default MapPage;

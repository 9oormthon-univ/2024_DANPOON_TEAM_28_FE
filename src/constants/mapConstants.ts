export interface IPlaceData {
    lat: number;
    lng: number;
    placeName: string;
    address: string;
    siteUrl?: string;
    oneIntro: string;
}

const placeData: Array<IPlaceData> = [
    {
        lat: 37.5648926,
        lng: 127.0866036,
        placeName: '국립정신건강센터',
        address: '서울특별시 광진구 용마산로 127',
        siteUrl: 'https://www.ncmh.go.kr/ncmh/main.do',
        oneIntro:
            '국립정신건강센터는 정신건강증진을 위한 다양한 프로그램을 운영하고 있습니다.',
    },
    {
        lat: 37.4930535,
        lng: 127.1458989,
        placeName: '송파미소병원',
        address: '서울특별시 송파구 오금로 513, 위례빌딩 (거여동)',
        siteUrl: undefined,
        oneIntro:
            '정신건강의학과 전문 병원으로, 개방 및 폐쇄 병동을 운영하며 응급실을 갖추고 있습니다.',
    },
    {
        lat: 37.5310708,
        lng: 127.148408,
        placeName: '한국보훈복지의료공단 중앙보훈병원',
        address: '서울특별시 강동구 진황도로61길 53, (둔촌동)',
        siteUrl: 'http://seoul.bohun.or.kr',
        oneIntro:
            '종합병원으로 다양한 진료과목과 전문의가 상주하며, 응급실과 호스피스 전문기관을 운영하고 있습니다.',
    },
    {
        lat: 37.5239295,
        lng: 127.1076034,
        placeName: '재단법인아산사회복지재단 서울아산병원',
        address: '서울특별시 송파구 올림픽로43길 88, 서울아산병원 (풍납동)',
        siteUrl: 'http://www.amc.seoul.kr',
        oneIntro:
            '상급종합병원으로 다양한 진료과목과 전문의가 상주하며, 응급실과 중환자실을 운영하고 있습니다.',
    },
    {
        lat: 37.5617743,
        lng: 127.0829948,
        placeName: '전재진정신건강의학과의원',
        address: '서울특별시 광진구 긴고랑로 64, 2,3,4층 (중곡동)',
        siteUrl: undefined, // No website URL provided
        oneIntro:
            '정신건강의학과 전문 의원으로, 49개의 일반 입원실을 운영하고 있습니다.',
    },
    {
        lat: 37.5638704,
        lng: 127.0832672,
        placeName: '문경서정신건강의학과의원',
        address: '서울특별시 광진구 능동로 390, (중곡동)',
        siteUrl: undefined, // No website URL provided
        oneIntro:
            '정신건강의학과 전문 의원으로, 17개의 개방형 병상과 20개의 폐쇄형 병상을 운영하고 있습니다.',
    },
    {
        lat: 37.5630654,
        lng: 127.0828647,
        placeName: '조광신경정신과의원',
        address: '서울특별시 광진구 능동로 380, (중곡동, 2,3,4층)',
        siteUrl: undefined, // No website URL provided
        oneIntro:
            '정신건강의학과 전문 의원으로, 29개의 폐쇄형 병상을 운영하고 있습니다.',
    },
];

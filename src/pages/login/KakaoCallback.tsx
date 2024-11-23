import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get('code');

  const KAKAO_API_URL = 'https://kauth.kakao.com/oauth/token';
  const KAKAO_USER_INFO_URL = 'https://kapi.kakao.com/v2/user/me';
  const CLIENT_ID = import.meta.env.VITE_APP_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;

  useEffect(() => {
    if (!code) {
      console.error('인가 코드가 없습니다.');
      return;
    }
  
    let isFetching = false; // 중복 요청 방지 플래그
  
    const fetchKakaoData = async () => {
      if (isFetching) return; // 이미 요청 중이면 실행하지 않음
      isFetching = true;
  
      try {
        // Access Token 요청
        const tokenResponse = await axios.post(
          KAKAO_API_URL,
          null,
          {
            params: {
              grant_type: 'authorization_code',
              client_id: CLIENT_ID,
              redirect_uri: REDIRECT_URI,
              code: code,
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          }
        );
  
        const { access_token } = tokenResponse.data;
        console.log('Access Token:', access_token);
  
        // 사용자 정보 요청
        const userInfoResponse = await axios.get(KAKAO_USER_INFO_URL, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
  
        const userInfo = userInfoResponse.data;
        console.log('사용자 정보:', userInfo);
  
        // 사용자 정보를 로컬 스토리지에 저장
        localStorage.setItem('accessToken', access_token);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
  
        navigate('/mission'); // 성공 시 페이지 이동
      } catch (error) {
        console.error('로그인 실패:', error);
        navigate('/login'); // 실패 시 로그인 페이지 이동
      } finally {
        isFetching = false; // 요청 완료 후 플래그 초기화
      }
    };
  
    fetchKakaoData();
  }, [code, navigate]);

  return <div>로그인 처리 중...</div>;
};

export default KakaoCallback;

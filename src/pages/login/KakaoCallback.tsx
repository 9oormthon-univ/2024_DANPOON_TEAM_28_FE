import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { api } from '@/utils/customAxios';
// import { axios } from 'axios';

const KakaoCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      const sendCodeToBackend = async () => {
        try {
          const response = await api.post(
            `/api/v1/kakao-login?code=${code}`,
            null,
            {
              // params: { code },
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
              },
            }
          );

          const { data } = response.data;

          console.log('로그인 성공:', data);

          localStorage.setItem('accessToken', data.tokenInfo.accessToken);
          localStorage.setItem('refreshToken', data.tokenInfo.refreshToken);
          localStorage.setItem('userInfo', JSON.stringify(data.userInfo));

          navigate('/mission');
        } catch (error) {
          console.error('로그인 실패:', error);
          //navigate('/login');
          console.log(code);
        }
      };

      sendCodeToBackend();
    } else {
      console.error('인가 코드가 없습니다.');
    }
  }, [code, navigate]);

  return <div>로그인 처리 중...</div>;
};

export default KakaoCallback;

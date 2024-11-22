import { fetchInstance } from '@/api/instance';

const KAKAO_LOGIN_API = '/api/v1/kakao-login';

export const kakaoLogin = async (code: string) => {
    try {
      const response = await fetchInstance.post(
        `${KAKAO_LOGIN_API}?code=${code}`,
        null,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      );
  
      const { accessToken, refreshToken, userInfo } = response.data.tokenInfo;
  
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
  
      return { accessToken, refreshToken, userInfo };
    } catch (error) {
      console.error('카카오 로그인 실패:', error);
      throw error;
    }
  };
  

  export const kakaoLogout = async () => {
    try {
      await fetchInstance.post('/api/v1/logout');
      console.log('로그아웃 성공');
  
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    } catch (error) {
      console.error('로그아웃 실패:', error);
      throw error;
    }
  };
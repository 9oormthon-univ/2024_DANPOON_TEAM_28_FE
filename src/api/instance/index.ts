import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { RouterPath } from '@/Router';
import { authLocalStorage } from '@/utils/storage';

export const baseURL = process.env.VITE_API_URL;

const initInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...config.headers,
    },
  });

  return instance;
};

export const fetchInstance = initInstance({
  baseURL,
  withCredentials: true,
});


const getAccessToken = () => authLocalStorage.get();
export const fetchWithToken = initInstance({
  baseURL,
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  },
});

fetchWithToken.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

fetchWithToken.interceptors.response.use(
    (response) => response.data,
    async (error) => {
      if (error.response?.status === 401) {
        console.warn('401 Unauthorized: 액세스 토큰 만료');
        authLocalStorage.set(undefined);
        window.location.href = RouterPath.login;
      }
      return Promise.reject(error);
    },
);

export const kakaoBaseURL = 'https://dapi.kakao.com';
export const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

export const kakaoAPI = initInstance({
  baseURL: kakaoBaseURL,
  headers: {
    Authorization: `KakaoAK ${KAKAO_API_KEY}`,
  },
});
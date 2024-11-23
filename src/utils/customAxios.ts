import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // headers: {
    //     'Content-Type': 'application/json',
    // },
    // params: {},
    withCredentials: true,
});

//토큰이 있는지 계산하는 함수. 토큰 계산 값을 확인해 리턴해준다.
export function getAuthToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    return token;
}

//토큰이 있다면 헤더에 토큰 추가하기 로직
// api.interceptors.request.use(
//     async (
//         config: InternalAxiosRequestConfig
//     ): Promise<InternalAxiosRequestConfig> => {
//         const nextConfig = config;
//         const accessToken = getAuthToken();
//         nextConfig.headers.Authorization = accessToken
//             ? `Bearer ${accessToken}`
//             : '';

//         return nextConfig;
//     },
//     (error) => {
//         console.log(error);
//         alert(error.response?.data.message);
//         throw error;
//     }
// );

export { api };

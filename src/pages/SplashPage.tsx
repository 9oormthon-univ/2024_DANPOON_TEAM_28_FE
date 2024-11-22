import Logo from "@/components/Logo";
import { useEffect,} from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from "@/Router";
import { Box } from "@mui/material";

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenAndRedirect = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const token = localStorage.getItem('token');
      if (token) {
        navigate(RouterPath.mission); // 로그인 상태 → 미션 페이지로 이동
      } else {
        navigate(RouterPath.login); // 비로그인 상태 → 로그인 페이지로 이동
      }
    };

    checkTokenAndRedirect();
  }, [navigate]);

    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "livelyPrimary.4",
        }}
      >
        <Logo size="large" showName={true} />
      </Box>
    );
  };
  
  export default SplashPage;
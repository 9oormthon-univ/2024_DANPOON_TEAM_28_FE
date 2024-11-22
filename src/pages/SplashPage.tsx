import Logo from "@/components/Logo";
import { Box } from "@mui/material";

const SplashPage = () => {
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
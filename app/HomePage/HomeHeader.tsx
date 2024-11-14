import { Box } from "@mui/material";

const HomeHeader = () => {
  return (
    <Box
      sx={{
        widhth: "100%",
        // height: "100vh",
      }}
    >
      <video width="100%" height="100vh" loop autoPlay>
        <source src="/img/GiftFital.mp4" type="video/mp4" />
      </video>
    </Box>
  );
};

export default HomeHeader;

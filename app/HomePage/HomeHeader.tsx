import { Box } from "@mui/material";

const HomeHeader = () => {
  return (
    <Box
      sx={{
        widhth: "100%",
        height: "100vh",
      }}
    >
      {/* {customVideo.map(({video}, id) => (
            <Box key={id} sx={{
                // backgroundColor: '#7366A0',
                // bgcolor: '#7366A0',
                bgcolor: 'black',
                backgroundImage: `url(${video})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: {xs: 'center center', sm: 'center center', md: 'center center', lg: 'center center',},
                backgroundSize: 'cover',
                widhth: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}> */}
      {/* <Typography>
                    Header
                </Typography> */}
      {/* <video width="100%" height="100vh" loop autoPlay preload="none">
                <source src="/img/GiftFital.mp4" type="video/mp4" /> */}
      {/* <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                /> */}
      {/* Your browser does not support the video tag. */}
      {/* </video>
            </Box>
            ))} */}
      <video width="100%" height="100vh" loop autoPlay>
        <source src="/img/GiftFital.mp4" type="video/mp4" />
      </video>
    </Box>
  );
};

export default HomeHeader;

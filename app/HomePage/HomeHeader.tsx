import { Box } from "@mui/material";

interface CustomVideo {
  id: number;
  video: string;
}

const customVideo: CustomVideo[] = [
  {
      id: 1,
      video: '/img/GiftFital.gif'
      
  },
]

const HomeHeader = () => {
  return (
    <Box>
            {customVideo.map(({video}, id) => (
            <Box key={id} sx={{
                
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
            }}>
                
            </Box>
            ))}
        </Box>
  );
};

export default HomeHeader;

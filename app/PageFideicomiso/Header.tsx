import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface CustomVideo {
    id: number;
    video: string;
}

const customVideo: CustomVideo[] = [
    {
        id: 1,
        video: '/img/Fideicomiso.gif'
    },
]

const Header = () => {
    return (
        <Box>
            {customVideo.map(({video}, id) => (
                <Box key={id} sx={{
                    // bgcolor: '#7366A0',
                    bgcolor: 'black',
                    backgroundImage: `url(${video})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: {xs: 'center 480px', sm: '200px center', md: '200px center', lg: '200px center',},
                    backgroundSize: {xs: '70%', sm: 'cover', md: 'cover', lg: 'cover',},
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    alignItems: {xs: 'center', sm: 'start', md: 'start', lg: 'cetert',},
                    justifyContent: {xs: 'start', sm: 'center', md: 'center', lg: 'center',},
                    flexDirection: 'column',
                    border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                }}>
                    <Box sx={{
                        marginLeft: {xs: '0px', sm: '0px', md: '130px', lg: '130px',},
                        border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                        padding: {xs: '150px 0px 0px 20px', sm: '0px 20px', md: '0px', lg: '0px',},
                    }}>
                        <Typography sx={{
                            fontSize: {xs: '43px', sm: '43px', md: '63px', lg: '63px',},
                        }}>
                            Fideicomiso Digital:
                            <br />
                            Protección y gestión 
                            <br />
                            avanzada de tus bienes.
                        </Typography>
                    </Box>
                    <Box sx={{
                        marginLeft: {xs: '0px', sm: '20px', md: '130px', lg: '130px',},
                        marginTop: {xs: '350px', sm: '50px', md: '50px', lg: '50px',}
                    }}>
                        <Link href={'/'} style={{
                            fontSize: '30px'
                        }}>
                            <Box sx={{
                                border: '2px solid #FFC72C',
                                padding: '20px 30px',
                                borderRadius: '100px'
                            }}>
                                Crea tu Fideicomiso
                            </Box>   
                        </Link>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default Header
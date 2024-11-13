import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface CustomVideo {
    id: number;
    video: string;
}

const customVideo: CustomVideo[] = [
    {
        id: 1,
        video: '/img/compra-de-tokens.gif'
        
    },
]

const Header = () => {
    return (
        <Box>
            {customVideo.map(({video}, id) => (
            <Box key={id} sx={{
                // bgcolor: '#312857',
                bgcolor: 'black',
                backgroundImage: `url(${video})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: {xs: 'center center', sm: '150px center', md: '200px center', lg: '450px center',},
                backgroundSize: 'cover',
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
                        ¿Sabías que puedes 
                        <br />
                        <span style={{color: '#FFC72C', fontWeight: 900,}}>comprar Tokens</span>
                        <br />
                        <span style={{color: '#FFC72C', fontWeight: 900,}}>inmobiliarios</span> con Fital?
                    </Typography>
                </Box>
                <Box sx={{
                    marginLeft: {xs: '0px', sm: '20px', md: '130px', lg: '130px',},
                    marginTop: {xs: '0px', sm: '50px', md: '50px', lg: '50px',},
                    border: '1px solid red',
                    // padding: '10px 40px'
                    padding: '10px 40px'
                    
                }}>
                    <Typography sx={{
                        fontSize: '30px'
                    }}>
                        Es una <span style={{fontWeight: 900}}>representación digital</span> de una fracción 
                        <br />
                        <span style={{fontWeight: 900}}>del inmueble</span> o la propiedad completa,
                        <br />
                        creada mediante tecnología <span style={{fontWeight: 900}}>blockchain</span>.
                    </Typography>
                </Box>
                <Box sx={{
                    marginLeft: {xs: '0px', sm: '20px', md: '130px', lg: '130px',},
                    marginTop: {xs: '50px', sm: '50px', md: '50px', lg: '50px',},
                    position: 'relative'
                }}>
                    <Link href={'https://i.mtr.cool/GJMQKSAQQG'}>
                        <Typography sx={{
                            border: '2px solid #FFC72C',
                            borderRadius: '50px',
                            padding: '10px 30px'
                        }}>
                            Compra tus tokens
                        </Typography>
                    </Link>
                </Box>
            </Box>
            ))}
        </Box>
    )
}

export default Header
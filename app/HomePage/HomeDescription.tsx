import { Box, Typography } from "@mui/material";
import Image from "next/image";
import destellos from "@/public/img/destellos1.png";
import logo from "@/public/img/logo-fital.svg"

const HomeDescription = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '100px 0px',
        }}>
            <Box>
                <Image
                    src={destellos}
                    alt="Destellos"
                    style={{
                        position: 'relative'
                    }}
                />
            </Box>
            <Box sx={{
                backgroundColor: '#341F5F',
                width: '90%',
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: {xs: '50px 25px', sm: '50px 25px', md: '50px 100px', lg: '50px 100px',},
            }}>
                <Box>
                    <Image 
                        src={logo}
                        alt="Logo FItal"
                        style={{
                            marginTop: '50px',
                            marginBottom: '50px'
                        }}
                    />
                </Box>
                <Box sx={{
                    marginBottom: '50px',
                }}>
                    <Typography sx={{
                        fontSize: {xs: '20px', sm: '20px', md: '30px', lg: '30px',},
                    }}>
                        FITAL está revolucionando el mercado inmobiliario a través de la tokenización, convirtiendo
                        <br />
                        propiedades en tokens digitales para facilitar su comercialización. Además, ofrece servicios de
                        <br />
                        fideicomisos digitales, asegurando que los activos estén protegidos. Con nuestra wallet 
                        <br />
                        te conectamos con el futuro de la economía digital.
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Image
                    src={destellos}
                    alt="Destellos"
                    style={{
                         position: 'relative'   
                    }}
                />
            </Box>
        </Box>
    )
}

export default HomeDescription
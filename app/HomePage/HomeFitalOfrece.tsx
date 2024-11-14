import { Box, Typography } from "@mui/material";
import Image from "next/image";
import img from "@/public/img/Fital Ofrece.png";

interface CustomFitalOfrece {
    id: number;
    numero: string;
    titulo: string;
}

const customFitalOfrece: CustomFitalOfrece[] = [
    {
        id: 1,
        numero: '1',
        titulo: 'Ayudar a atraer compradores de todos los segmentos',
    },
    {
        id: 2,
        numero: '2',
        titulo: 'Agilizar los procesos de comercialización ',
    },
    {
        id: 3,
        numero: '3',
        titulo: 'Expertos en desarrollo Blockchain',
    },
    {
        id: 4,
        numero: '4',
        titulo: 'Desarrollo de Smart Contracts ',
    },
    {
        id: 5,
        numero: '5',
        titulo: 'Protección y Seguridad a Través de Fideicomisos Digitales',
    },
    {
        id: 6,
        numero: '6',
        titulo: 'Soporte Legal y Cumplimiento Normativo ',
    },
    {
        id: 7,
        numero: '7',
        titulo: 'Campañas de Marketing y Venta Personalizadas',
    },
]

const HomeFitalOfrece = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',            
            flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row',},
        }}>
            <Box>
                <Box sx={{
                    marginLeft: '55px',
                    padding: {xs: '0px 50px', sm: '0px 100px', md: '0px 0px 0px 100px', lg: '0px 0px 0px 100px',},
                }}>
                    <Typography sx={{
                        fontSize: '68px'
                    }}>
                        <span style={{
                            color: '#FFC72C'
                        }}>FITAL</span> ofrece
                    </Typography>
                </Box>
                <Box sx={{
                    padding: {xs: '0px 50px', sm: '0px 100px', md: '0px 0px 0px 100px', lg: '0px 0px 0px 100px',},                    
                }}>
                    {customFitalOfrece.map(({numero, titulo}, id) => (
                        <Box key={id} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            
                        }}>
                            <Box sx={{
                                bgcolor: '#210044',
                                borderRadius: '200px',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px'
                            }}>
                                <Typography>
                                    {numero}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    marginLeft: '10px',
                                    fontSize: {xs: '16px', sm: '25px', md: '18px', lg: '25px',},
                                }}>
                                    {titulo}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box sx={{
                padding: {xs: '0px 100px 0px 0px', sm: '0px 100px 0px 0px', md: '0px 100px 0px 0px', lg: '0px 100px 0px 0px',},
                width: {xs: '100%', sm: '100%', md: '40%', lg: '50%',},
            }}>
                <Image 
                    src={img}
                    alt="image Fital Ofrece"
                />
            </Box>
        </Box>
    )
}

export default HomeFitalOfrece
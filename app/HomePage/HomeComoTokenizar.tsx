import { Box, Typography } from "@mui/material";
import Image from "next/image";
import bg from "@/public/img/ImagenTokenizacion.png"

const HomeComoTokenizar = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            // padding: '100px 150px',
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'row',},
            padding: {xs: '100px 50px', sm: '100px 0px', md: '100px 50px', lg: '100px 150px',},
            border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
        }}>
            <Box sx={{
                // border: '1px solid red',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                // width: '800px',
                width: {xs: '100%', sm: '100%', md: '800px', lg: '800px',},
                border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
            }}>
                <Box sx={{
                    padding: '0px 0px 25px 0px'
                }}>
                    <Typography sx={{
                        // fontSize: '37px',
                        fontSize: {xs: '30px', sm: '30px', md: '37px', lg: '37px',},
                        textAlign: {xs: 'center', sm: 'left', md: 'left', lg: 'left',},
                        padding: {xs: '0px', sm: '0px 0px 0px 100px', md: '0px', lg: '0px',},
                        width: {xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto',},
                        border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                    }}>
                        ¿Cómo <span style={{color: '#FFC72C'}}>tokenizar</span> tu inmueble <span style={{color: '#FFC72C'}}>con FITAL?</span>
                    </Typography>                    
                </Box>
                <Box>
                    <Typography sx={{
                        // fontSize: '25px',
                        fontSize: {xs: '15px', sm: '15px', md: '25px', lg: '25px',},
                        padding: {xs: '0px', sm: '0px 0px 0px 100px', md: '0px', lg: '0px',},
                        width: {xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto',},
                    }}>
                        Comienza con la transferencia del inmueble a un
                        <br />
                        fideicomiso, convierte propiedades físicas en activos 
                        <br />
                        digitales que pueden ser fácilmente comprados, 
                        <br />
                        vendidos y gestionados. Esto facilita el acceso al mercado 
                        <br />
                        inmobiliario, mejora la liquidez y reduce los costos 
                        <br />
                        asociados con la comercialización tradicional en bienes 
                        <br />
                        raíces.
                    </Typography>                                    
                </Box>
            </Box>
            <Box sx={{
                border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                width: {xs: '100%', sm: '100%', md: 'auto', lg: 'auto',},
            }}>
                <Image 
                    src={bg}
                    alt='Imagen Tokenización'
                />
            </Box>
        </Box>
    )
}

export default HomeComoTokenizar
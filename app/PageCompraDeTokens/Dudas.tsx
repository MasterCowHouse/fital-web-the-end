import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Dudas = () => {
    return (
        <Box>
            <Box sx={{
                padding: '50px 0px'
            }}>
                <Box>
                    <Typography sx={{
                        fontWeight: 900,
                        color: '#FFC72C',
                        fontSize: '50px',
                        textAlign: 'center',
                        border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                    }}>
                        ¿Dudas?
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: {xs: '30px', sm: '35px', md: '50px', lg: '50px',},
                        border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                        textAlign: 'center'
                    }}>
                        Habla con <span style={{fontWeight: 900}}>nuestros expertos.</span> 
                        <br />
                        Estamos para <span style={{fontWeight: 900}}>apoyarte</span> en el camino.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},

            }}>
                <Link href={'https://api.whatsapp.com/send?phone=+525619776800&text=Quiero%20comprar%20tokens,%20me%20comparten%20m%C3%A1s%20informaci%C3%B3n%20%F0%9F%8F%A0%20'}>
                    <Typography sx={{
                        border: '2px solid #FFC72C',
                        borderRadius: '100px',
                        width: '200px',
                        textAlign: 'center',
                        padding: '10px 0px'
                    }}>
                        Contacta a un 
                        experto
                    </Typography>
                </Link>
            </Box>
        </Box>
    )
}

export default Dudas
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import suscripciones from "@/public/img/Suscripciones.svg";    

interface CustomSuscripciones {
    id: number;
    titulo: string;
    texto: JSX.Element;
    margenB?: string;
}

const customSuscripciones: CustomSuscripciones[] = [
    {
        id: 1,
        titulo: 'Suscripción 1',
        texto: <span>Comercialización de Bienes <br /> y Levantamiento de Capital</span>,
    },
    {
        id: 2,
        titulo: 'Suscripción 2',
        texto: <span>Tokenización de <br /> Proyectos Terminados</span>,
    },
    {
        id: 3,
        titulo: 'Suscripción 3',
        texto: <span>Tokenización Integral <br /> y Gestión de Activos</span>,
        margenB: '100px'
    },
]

const Suscripciones = () => {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography sx={{
                    fontSize: '50px',
                    
                }}>
                    Suscripciones
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: {xs: 'center', sm: 'center', md: 'space-between', lg: 'space-between',},
                flexWrap: 'wrap'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    width: {xs: '80%', sm: '80%', md: '50%', lg: '50%',},
                }}>
                    {customSuscripciones.map(({titulo, texto, margenB}, id) => (
                        <Box key={id} sx={{
                            display: 'flex',
                            alignItems: 'start',
                            flexDirection: 'column',
                            width: '100%'
                        }}>
                            <Typography sx={{
                                border: '2px solid #FFC72C',
                                borderRadius: '100px',
                                padding: '30px 100px 30px 70px',
                                color: '#FFC72C',                                
                                fontSize: {xs: '25px', sm: '35px', md: '35px', lg: '35px',},
                                width: '100%',
                                marginTop: '100px',
                                marginLeft: {xs: '0px', sm: '0px', md: '100px', lg: '100px',},
                            }}>
                                {titulo}
                            </Typography>
                            <Typography sx={{
                                padding: '10px 70px',
                                width: '100%',
                                marginLeft: {xs: '0px', sm: '0px', md: '100px', lg: '100px',},
                                marginBottom: `${margenB}`
                            }}>
                                {texto}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                <Box sx={{
                    width: {xs: '80%', sm: '80%', md: '50%', lg: '50%',},
                    display: {xs: 'none', sm: 'none', md: 'block', lg: 'block',},
                    
                }}>
                    <Image 
                        src={suscripciones}
                        alt="Imagen Suscripciones"
                        
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Suscripciones
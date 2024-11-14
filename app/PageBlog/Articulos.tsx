import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface CustomBlog {
    id: number;
    bg: string;
    numero: string;
    corazon: string;
    fecha: string;
    texto: JSX.Element;
}

const customBlog: CustomBlog[] = [
    {
        id: 1,
        bg: '../img/bgUno.jpg',
        numero: '5',
        corazon: '../img/corazon.svg',
        fecha: '09/09/2024',
        texto: <span>La evolución del Fideicomiso <br />tradicional al digital.</span>
    },
    {
        id: 2,
        bg: '../img/bgDos.jpg',
        numero: '5',
        corazon: '../img/corazon.svg',
        fecha: '16/09/2024',
        texto: <span>¿Qué diferencias hay entre la <br />venta tradicional de inmuebles y <br />la tokenización?</span>
    },
    {
        id: 3,
        bg: '../img/bgTres.jpg',
        numero: '5',
        corazon: '../img/corazon.svg',
        fecha: '14/08/2024',
        texto: <span>Seguridad y Transparencia: <br />Claves para Invertir en Bienes <br />Raíces con Criptomonedas.</span>
    },
    {
        id: 4,
        bg: '../img/bgUno.jpg',
        numero: '5',
        corazon: '../img/corazon.svg',
        fecha: '14/08/2024',
        texto: <span>Seguridad y Transparencia: <br />Claves para Invertir en Bienes <br />Raíces con Criptomonedas.</span>
    },
    {
        id: 5,
        bg: '../img/bgDos.jpg',
        numero: '5',
        corazon: '../img/corazon.svg',
        fecha: '14/08/2024',
        texto: <span>Seguridad y Transparencia: <br />Claves para Invertir en Bienes <br />Raíces con Criptomonedas.</span>
    },
    {
        id: 6,
        bg: '../img/bgTres.jpg',
        numero: '5',
        corazon: '../img/corazon.svg',
        fecha: '14/08/2024',
        texto: <span>Seguridad y Transparencia: <br />Claves para Invertir en Bienes <br />Raíces con Criptomonedas.</span>
    },
]

const Articulos = () => {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}>
                {customBlog.map(({bg, numero, corazon, fecha, texto}, id) => (
                    <Box key={id} sx={{
                        padding: {xs:'25px', sm:'100px', md:'100px', lg:'100px',},
                    }}>
                        <Box sx={{
                            backgroundImage: `url(${bg})`,
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: {xs:'350px', sm:'300px', md:'300px', lg:'300px',},
                            height: {xs:'350px', sm:'300px', md:'300px', lg:'300px',},
                            
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'end',
                                padding: '10px',
                                gap: 1
                                
                            }}>
                                <Typography>
                                    {numero}
                                </Typography>
                                <Image 
                                    src={corazon}
                                    alt="Blog"
                                    width={15}
                                    height={15}
                                />
                            </Box>
                            <Box sx={{
                                marginTop: {xs:'200px', sm:'150px', md:'150px', lg:'150px',},
                                padding: '0px 0px 0px 20px'
                            }}>
                                <Box>
                                    <Typography>
                                        {fecha}
                                    </Typography>
                                    <Typography>
                                        {texto}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '25px'
                        }}>
                            <Link href={'/'}>
                                <Typography sx={{
                                    border: '2px solid #FFC72C',
                                    borderRadius: '50px',
                                    width: '150px',
                                    textAlign: 'center',
                                    padding: '10px 0px'
                                }}>
                                    Leer más
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                ))}
                
            </Box>
        </Box>
    )
}

export default Articulos
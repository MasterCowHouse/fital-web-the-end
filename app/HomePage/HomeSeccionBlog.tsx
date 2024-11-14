import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface CustomBlog {
    id: number;
    bgBlog: string;
    fecha: string;
    texto: JSX.Element;
    hrefBtnBlog: string;
    btnText: string;
}

const customBlog: CustomBlog[] = [
    {
        id: 1,
        bgBlog: '../img/imgBlog1.jpg',
        fecha: '16/09/2024',
        texto:  <span>La evolución del Fideicomiso <br />tradicional al digital.</span>,
        hrefBtnBlog: '/PageBlogArticulo',
        btnText: 'Leer más'
    },
    {
        id: 2,
        bgBlog: '../img/imgBlog2.jpg',
        fecha: '16/10/2024',
        texto: <span>¿Qué diferencias hay entre la <br />venta tradicional de inmuebles y <br /> la tokenización?</span>,
        hrefBtnBlog: '/',
        btnText: 'Leer más'
    },
    {
        id: 3,
        bgBlog: '../img/imgBlog3.jpg',
        fecha: '14/08/2024',
        texto: <span>Seguridad y Transparencia: <br />Claves para Invertir en Bienes <br />Raíces con Criptomonedas.</span>,
        hrefBtnBlog: '/',
        btnText: 'Leer más'
    },
]

const HomeSeccionBlog = () => {
    return (
        <Box sx={{
            backgroundColor: '#241441',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: {xs: '0px', sm: '100px', md: '100px', lg: '100px',},
            }}>
                <Box>
                    <Typography sx={{
                        fontSize: {xs: '58px', sm: '68px', md: '68px', lg: '68px',},
                        textAlign: {xs: 'center', sm: 'center', md: 'left', lg: 'left',},
                    }}>
                        Infórmate con FITAL
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: '30px',
                        textAlign: {xs: 'center', sm: 'center', md: 'left', lg: 'left',},
                    }}>
                        Descubre las últimas tendencias y consejos en nuestro blog. ¡No te lo pierdas!
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                flexWrap: 'wrap'
            }}>
                {customBlog.map(({bgBlog, fecha, texto, hrefBtnBlog, btnText}, id) => (
                    <Box key={id}>
                        <Box>
                            <Box sx={{
                                backgroundImage: `url(${bgBlog})`,
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',  
                                width: {xs: '350px', sm: '400px', md: '400px', lg: '400px',},
                                height: '400px',
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-end',
                                flexDirection: 'column',
                                padding: '0px 0px 50px 30px'
                            }}>
                                <Typography>
                                    {fecha}
                                </Typography>
                                <Typography>
                                    {texto}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '25px',
                            marginBottom: '100px'
                        }}>
                            <Link href={hrefBtnBlog} >
                                <Box sx={{
                                    border: '2px solid #FFC72C',
                                    borderRadius: '100px',
                                    padding: '10px 20px',
                                    textAlign: 'center',
                                    width: '200px'
                                }}>
                                    {btnText}
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default HomeSeccionBlog
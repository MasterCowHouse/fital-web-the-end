'use client'
import { Box, Typography} from "@mui/material";
import Link from "next/link";
// Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "@/app/PageCompraDeTokens/Slider.module.css"
import { Navigation } from 'swiper/modules';

interface CustomSlider {
    id: number;
    precio?: string;
    texto: JSX.Element;
    estilos?: {
        display?: string;
        alignItems?: string;
        justifyContent?: string;
        flexDirection?: string;
        backgroundImage?: string;
        backgroundColor?: string;
        backgroundPosition?: string;
        backgroundSize?: string;
        backgroundRepeat?: string;
        width?: string;
        height?: string;
    };
    linkNFTS: string;
    bgColor: {
        backgroundColor: string;
    };
    textoBtn: string;
}

const customSlider: CustomSlider[] = [
    {
        id: 1,
        precio: 'Desde 16,150 MXN',
        texto: <span>LOFTS BAWA</span>,
        estilos: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: 'url(../img/BAWA.jpeg)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '300px',
        },
        linkNFTS: 'https://bawa.fitalmx.com/',
        bgColor: {
            backgroundColor: '#FFC72C',
        },
        textoBtn: 'Ver más',
    },
    {
        id: 2,
        precio: 'Precio',
        texto: <span>Descripción</span>,
        estilos: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: 'url(../img/BAWA.jpg)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '300px',
        },
        linkNFTS: '/',
        bgColor: {
            backgroundColor: '#505050',
        },
        textoBtn: '',
    },
    {
        id: 3,
        precio: 'Precio',
        texto: <span>Descripción</span>,
        estilos: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: 'url(../img/BAWA.jpg)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '300px',
        },
        linkNFTS: '/',
        bgColor: {
            backgroundColor: '#505050',
        },
        textoBtn: '',
    },
    {
        id: 4,
        precio: 'Precio',
        texto: <span>Descripción</span>,
        estilos: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: 'url(../img/BAWA.jpg)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '300px',
        },
        linkNFTS: '/',
        bgColor: {
            backgroundColor: '#505050',
        },
        textoBtn: '',
    },
    {
        id: 5,
        precio: 'Precio',
        texto: <span>Descripción</span>,
        estilos: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: 'url(../img/BAWA.jpg)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '300px',
        },
        linkNFTS: '/',
        bgColor: {
            backgroundColor: '#505050',
        },
        textoBtn: '',
    },
    {
        id: 6,
        precio: 'Precio',
        texto: <span>Descripción</span>,
        estilos: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: 'url(../img/BAWA.jpg)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '300px',   
        },
        linkNFTS: '/',
        bgColor: {
            backgroundColor: '#505050',
        },
        textoBtn: '',
    },
]

const SliderTokens = () => {
    
    return (
        <Box sx={{
            marginBottom: '50px'
        }}>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation={true}
                scrollbar={{draggable: true}}
                className={styles.swiperContenedor}
                loop={true}
                modules={[Navigation]}
            >
                {customSlider.map(({precio, texto, linkNFTS, bgColor, textoBtn}, id) => (
                    <SwiperSlide 
                    key={id} 
                    className={styles.swiperSlider}
                    // style={styles.estilos}
                    >
                        <Box sx={{
                            position: 'absolute',
                            zIndex: 1
                        }}>
                            <Typography sx={{
                                // backgroundColor: '#FFC72C',
                                // backgroundColor: `${bgColor}`,
                                ...bgColor,
                                color: 'black',
                                padding: '10px',
                                borderRadius: '100px',
                                
                            }}>
                                {precio}{/* 1.5 BTC */}
                            </Typography>
                        </Box>
                        <Box sx={{
                            backgroundColor: 'white',
                            width: '100%',
                            height: '150px',
                            position: 'absolute',
                            marginTop: '150px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <Typography sx={{
                                color: "black",
                                textAlign: 'center',
                                
                            }}>
                                {texto}
                                {/* Cancún Q. Roo
                                <br />
                                Tokens disponibles: <span>13</span> */}
                            </Typography>
                            <Link href={linkNFTS} target="_blank" style={{
                                color: '#FFC72C',
                                fontWeight: 900
                            }}>
                                {textoBtn}
                                {/* Ver más */}
                            </Link>
                        </Box>
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </Box>
        
    )
}

export default SliderTokens
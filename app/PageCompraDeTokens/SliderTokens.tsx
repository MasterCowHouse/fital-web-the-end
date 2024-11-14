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


}

const customSlider: CustomSlider[] = [
    {
        id: 1,
        
    },
    {
        id: 2,
        
    },
    {
        id: 3,
        
    },
    {
        id: 4,
        
    },
    {
        id: 5,
        
    },
    {
        id: 6,
        
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
                {customSlider.map(({}, id) => (
                    <SwiperSlide 
                    key={id} 
                    className={styles.swiperSlider}
                    >
                        <Box sx={{
                            position: 'absolute',
                            zIndex: 1
                        }}>
                            <Typography sx={{
                                backgroundColor: '#FFC72C',
                                color: 'black',
                                padding: '10px',
                                borderRadius: '100px'
                            }}>
                                1.5 BTC
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
                                Cancún Q. Roo
                                <br />
                                Tokens disponibles: <span>13</span>
                            </Typography>
                            <Link href={'/'} style={{
                                color: '#FFC72C',
                                fontWeight: 900
                            }}>
                                Ver más
                            </Link>
                        </Box>
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </Box>
        
    )
}

export default SliderTokens
'use client'
import { Box, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
// Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './Slider.module.css';
import styles from "@/app/PageCompraDeTokens/Slider.module.css"
import { Pagination, Navigation, Controller } from 'swiper/modules';
import { useState } from "react";

interface CustomSlider {
    id: number;
    imgSlider: string;

}

const customSlider: CustomSlider[] = [
    {
        id: 1,
        imgSlider: '/img/bgDos.jpg'
    },
    {
        id: 1,
        imgSlider: '/img/bgDos.jpg'
    },
    {
        id: 1,
        imgSlider: '/img/bgDos.jpg'
    },
    {
        id: 1,
        imgSlider: '/img/bgDos.jpg'
    },
    {
        id: 1,
        imgSlider: '/img/bgDos.jpg'
    },
    {
        id: 1,
        imgSlider: '/img/bgDos.jpg'
    },
]

const SliderTokens = () => {
    const [swiperControll, setSwiperControll] = useState<null>(null);
    const [swiperControllSecond, setSwiperControllSecond] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        // <Box sx={{
        //     display: 'flex',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     paddingBottom: '100px',
        //     border: '1px solid red'
        // }}>
        //     <Box sx={{
        //         width: '300px',
        //         height: '300px',
        //         bgcolor: '#524092',
        //         display: 'flex',
        //         alignItems: 'center',
        //         justifyContent: 'center'
        //     }}>
        //         <Typography>
        //             SliderTokens
        //         </Typography>
        //     </Box>
        // </Box>
        <Box sx={{
            border: '1px solid red',
            marginBottom: '50px'
        }}>
            {/* <button onClick={() => swiperControll.slidePrev()}>{'<'}</button>
            <button onClick={() => swiperControll.slideNext()}>{'>'}</button> */}
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation={true}
                // pagination={{
                //     clickable: true,
                // }}
                scrollbar={{draggable: true}}
                // className="w-[80%]"
                className={styles.swiperContenedor}
                loop={true}
                // modules={[Pagination, Navigation]}
                modules={[Navigation]}
                // onSwiper={(swiper) => setSwiperControll(swiper)}
                // onSlideChange={() => setActiveIndex(swiperControll.activeIndex)}
                
                
            >
                {customSlider.map(({imgSlider}, id) => (
                    <SwiperSlide 
                    key={id} 
                    // style={{
                    //     display: 'flex',
                    //     alignItems: 'center',
                    //     justifyContent: 'center',
                    //     flexDirection: 'column',
                    //     border: '1px solid red',
                    //     backgroundColor: '#524092',
                    //     width: '100%',
                    //     height: '300px',
                    // }}
                    className={styles.swiperSlider}
                    >
                        {/* <Image 
                            src={imgSlider}
                            alt="Invertir Fital"
                            width={200}
                            height={200}
                        /> */}
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
                                // marginTop: '30px'
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
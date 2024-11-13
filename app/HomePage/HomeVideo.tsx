import { Box,Typography } from "@mui/material"
import Link from "next/link"

const HomeVideo = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            // border: '1px solid red',
            flexWrap: 'wrap',
            border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
            flexDirection: {xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row',},
        }}>
            {/* <Box sx={{
                bgcolor: 'black',
                // width: '1000px',
                // height: '696px',
                width: {xs: '90%', sm: '250px', md: '500px', lg: '700px',},
                height: {xs: '500px', sm: '250px', md: '500px', lg: '700px',},
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                
            }}> */}
                <Box className="flex items-center justify-center" sx={{
                    width: {xs: '90%', sm: '350px', md: '500px', lg: '700px',},
                    height: {xs: '500px', sm: '350px', md: '500px', lg: '700px',},
                    border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                }}>
                    <iframe style={{
                        width: '100%',
                        height: '100%',
                        // border: '1px solid red'
                    }} 
                    src="https://www.youtube.com/embed/v_WTVxt8L1w?si=CDBqwu7RSIfDPZL4" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    />
                </Box>
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/v_WTVxt8L1w?si=CDBqwu7RSIfDPZL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                {/* <Typography>
                    Video
                </Typography> */}
            {/* </Box> */}
            <Box sx={{
                display: 'flex',
                alignItems: {xs: 'center', sm: 'flex-start', md: 'flex-start', lg: 'flex-start',},
                justifyContent: 'center',
                flexDirection: 'column',
                border: '1px solid red',
            }}>
                <Box sx={{
                    // border: '1px solid red',
                    border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                    width: {xs: '90%', sm: '340px', md: '340px', lg: '340px',},
                    height: {xs: 'auto', sm: 'auto', md: '650px', lg: '650px',},
                    
                }}>
                    <Typography sx={{
                        fontSize: {xs: '30px', sm: '35px', md: '55px', lg: '55px',},
                        width: {xs: '90%', sm: '340px', md: '340px', lg: '340px',},
                        height: {xs: 'auto', sm: 'auto', md: '650px', lg: '650px',},
                        wordWrap: {xs: 'normal', sm: 'break-word', md: 'break-word', lg: 'break-word',},
                    }}>
                        <span style={{color: '#FFC72C'}}>Tokeniza tus propiedades </span>y da el primer paso hacia la revolución digital inmobiliaria.
                    </Typography>
                </Box>
                <Box sx={{
                    padding: {xs: '40px', sm: '0px', md: '0px', lg: '0px',},
                }}>
                    <Link href={'/PageTokenizacion'}>
                        <Box sx={{
                            border: '2px solid #FFC72C',
                            padding: '10px 20px',
                            borderRadius: '100px'
                        }}>
                            Tokeniza tus inmuebles
                        </Box>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default HomeVideo
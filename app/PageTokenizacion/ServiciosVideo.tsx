import { Box,Typography } from "@mui/material"

const ServiciosVideo = () => {
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: {xs: '90%', sm: '250px', md: '500px', lg: '700px',},
                height: {xs: '500px', sm: '250px', md: '500px', lg: '700px',},
                border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
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
                    src="https://www.youtube.com/embed/_nxmKgWeZx8?si=B00p0K9r5XzMvDLp" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                </Box>
                {/* <Typography>
                    Video
                </Typography> */}
            {/* </Box> */}
            <Box sx={{
                display: 'flex',
                // alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                alignItems: {xs: 'center', sm: 'flex-start', md: 'flex-start', lg: 'flex-start',},
                width: {xs: '90%', sm: 'auto', md: 'auto', lg: 'auto',},
            }}>
                <Box sx={{
                    border: '1px solid red',
                    textAlign: {xs: 'center', sm: 'left', md: 'left', lg: 'left',},
                }}>
                    <Typography sx={{
                        // fontSize: '55px',
                        wordWrap: {xs: 'normal', sm: 'break-word', md: 'break-word', lg: 'break-word',},
                        width: {xs: '100%', sm: '330px', md: '330px', lg: '360px',},
                        fontSize: {xs: '30px', sm: '30px', md: '55px', lg: '55px',},
                    }}>
                        Convierte tus bienes en <span style={{color: '#FFC72C'}}> activos digitales </span> y aumenta su liquidez con <span style={{color: '#FFC72C'}}>FITAL</span>
                        
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ServiciosVideo
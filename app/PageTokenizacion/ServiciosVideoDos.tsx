import { Box,Typography } from "@mui/material"

const ServiciosVideoDos = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            // border: '1px solid red',
            flexWrap: 'wrap',
            border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
            flexDirection: {xs: 'column-reverse', sm: 'row', md: 'row', lg: 'row',},
        }}>
            {/* <Box sx={{
                bgcolor: 'black',
                // width: '1000px',
                // height: '696px',
                width: {xs: '90%', sm: '300px', md: '500px', lg: '700px',},
                height: {xs: '500px', sm: '300px', md: '500px', lg: '700px',},
                border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
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
                    src="https://www.youtube.com/embed/xSScs4tfga4?si=cFrfQd5_JBXrEp9o" 
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
                alignItems: {xs: 'center', sm: 'flex-start', md: 'flex-start', lg: 'flex-start',},
                justifyContent: 'center',
                flexDirection: 'column',
                border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                width: {xs: '90%', sm: 'auto', md: 'auto', lg: 'auto',},
                
            }}>
                <Box sx={{
                    // border: '1px solid red'
                    // marginBottom: '50px',
                    marginBottom: {xs: '0px', sm: '50px', md: '50px', lg: '50px',},
                    textAlign: {xs: 'center', sm: 'left', md: 'left', lg: 'left',},
                }}>
                    <Typography sx={{
                        fontSize: '45px',
                        color: '#FFC72C',
                        fontWeight: 900,
                        // width: '260px',
                        width: {xs: '100%', sm: '260px', md: '260px', lg: '260px',},
                        height: '200px',
                        wordWrap: {xs: 'normal', sm: 'break-word', md: 'break-word', lg: 'break-word',},
                        // word-wrap: break-word;
                    }}>
                        ¿Buscas tokenizar tu proyecto?
                        
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: '25px',
                        // width: '260px',
                        width: {xs: '100%', sm: '260px', md: '260px', lg: '260px',},
                        wordWrap: {xs: 'normal', sm: 'break-word', md: 'break-word', lg: 'break-word',},
                        textAlign: {xs: 'center', sm: 'left', md: 'left', lg: 'left',},
                    }}>
                        Conoce nuestra plataforma hecha a medida para ti.
                        
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ServiciosVideoDos
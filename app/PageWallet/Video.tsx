import { Box, Typography } from "@mui/material"

const Video = () => {
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
            <Box sx={{
                bgcolor: 'black',
                // width: '1000px',
                // height: '696px',
                width: {xs: '90%', sm: '300px', md: '500px', lg: '700px',},
                height: {xs: '500px', sm: '300px', md: '500px', lg: '700px',},
                border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography>
                    Video
                </Typography>
            </Box>
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
                        fontSize: {xs: '45px', sm: '30px', md: '35px', lg: '45px',},
                        // width: '260px',
                        width: {xs: '100%', sm: '260px', md: '260px', lg: '280px',},
                        height: {xs: 'auto', sm: '220px', md: '300px', lg: '450px',},
                        // height: '300px',
                        wordWrap: {xs: 'normal', sm: 'break-word', md: 'break-word', lg: 'break-word',},
                        // word-wrap: break-word;
                    }}>
                        <span style={{fontWeight: 900, color: '#FFC72C'}}>¿Te quedaste con dudas?</span> <span style={{fontSize: '25px'}}>¿Te quedaste con dudas? Comunícate con nosotros y conéctate a la era digital</span> <span style={{fontWeight: 900, color: '#FFC72C',fontSize: '25px'}}>de FITAL</span>
                        
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Video
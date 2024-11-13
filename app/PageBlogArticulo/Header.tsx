import { Box, Typography } from "@mui/material";

const Header = () => {
    return (
        <Box>
            <Box sx={{
                backgroundImage: 'url(./img/bgBlogArticulo.jpg)',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '505px',
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'start'
            }}>
                <Typography sx={{
                    color: '#FFC72C',
                    fontSize: '50px',
                    marginLeft: '200px'
                }}>
                    BLOG
                </Typography>
            </Box>
        </Box>
    )
}

export default Header
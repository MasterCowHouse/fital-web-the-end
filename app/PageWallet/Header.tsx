import { Box, Typography } from "@mui/material";

const Header = () => {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center',
                height: '350px',
                border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
            }}>
                <Typography sx={{
                    textAlign: 'center',
                    fontSize: {xs: '35px', sm: '50px', md: '50px', lg: '50px',},
                    fontWeight: 900
                }}>
                    Fital Wallet, 
                    <br />
                    la wallet del futuro
                </Typography>
            </Box>
        </Box>
    )
}

export default Header
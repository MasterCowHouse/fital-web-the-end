import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface CustomEnlace {
    id: number;
    linkSection: string;
    textEnlace: string;
}

const customEnlace: CustomEnlace[] = [
    {
        id: 1,
        linkSection: '/PageCompraDeTokens',
        textEnlace: 'Quiero comprar tokens'
    },
    {
        id: 2,
        linkSection: 'https://i.mtr.cool/GJMQKSAQQG',
        textEnlace: 'Quiero vender tokens'
    },
]

const QuieresSerParteDeFital = () => {
    return (
        <Box sx={{
            bgcolor: '#210044',
            padding: '50px'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '50px',
                
            }}>
                <Typography sx={{
                    fontSize: '50px',
                    textAlign: {xs: 'center', sm: 'center', md: 'center', lg: 'center',},
                    
                }}>
                    ¿Quieres ser parte de FITAL?
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: {xs: 5, sm: 10, md: 10, lg: 10,},
                flexDirection: {xs: 'column', sm: 'row', md: 'row', lg: 'row',},
                
            }}>
                {customEnlace.map(({linkSection, textEnlace}, id) => (
                    <Box key={id} sx={{
                        bgcolor: '#7F4CA5',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        width: {xs: '100%', sm: 'auto', md: 'auto', lg: 'auto',},
                        textAlign: 'center',
                    }}>
                        <Link href={linkSection}>
                            {textEnlace}
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default QuieresSerParteDeFital
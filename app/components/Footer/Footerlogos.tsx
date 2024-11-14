import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface CustomLogosFooter {
    id: number;
    logosFooter: string;
    linksImgs: string;
}

const customLogosFooter: CustomLogosFooter[] = [
    {
        id: 1,
        logosFooter: '../img/CNBV.svg',
        linksImgs: 'https://www.gob.mx/cms/uploads/attachment/file/926341/TABLERO-DE-CONTROL-SOFOMES-ENR_05072024.pdf',
    },
    {
        id: 2,
        logosFooter: '../img/REDECO.svg',
        linksImgs: '',
    },
    {
        id: 3,
        logosFooter: '../img/REUNE.svg',
        linksImgs: 'https://eduweb.condusef.gob.mx/Reune/consulta.aspx?69,Finganas%2c+S.A.P.I.+de+C.V.%2c+SOFOM%2c+E.N.R.,,9,,',
    },
    {
        id: 4,
        logosFooter: '../img/SHCP.svg',
        linksImgs: '',
    },
    {
        id: 5,
        logosFooter: '../img/CONDUSEF.svg',
        linksImgs: 'https://webapps.condusef.gob.mx/SIPRES/jsp/home_publico.jsp?idins=15772',
    },
]

const Footerlogos = () => {
    return (
        <Box sx={{
            color: 'white'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: {xs: 2, sm: 5, md: 10, lg: 10,},
                padding: {xs: '0px', sm: '50px 0px', md: '50px 0px', lg: '50px 0px',},
                flexDirection: {xs: 'column', sm: 'row', md: 'row', lg: 'row',},
            }}>
                <Typography>
                    Términos y condiciones
                </Typography>
                <Typography>
                    Política de privacidad
                </Typography>
                <Typography>
                    Preguntas frecuentes
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: {xs: 2, sm: 2, md: 11, lg: 11,},
                padding: {xs: '20px', sm: '20px', md: '20px', lg: '0px 50px',},

            }}>
                {customLogosFooter.map(({logosFooter, linksImgs}, id) => (
                    <Box key={id}>
                        <Link href={`${linksImgs}`} target="_blank">
                            <Box 
                                component={'img'}
                                src={logosFooter}
                                alt="Credenciales"
                            />
                        </Link>
                    </Box>
                ))}
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0px 0px 100px 0px'
            }}>
                <Typography>
                    {/* &copy; or &#169; codigo para el copyright */}
                    2024 &copy; Todos los derechos reservados
                </Typography>
            </Box>
        </Box>
    )
}

export default Footerlogos
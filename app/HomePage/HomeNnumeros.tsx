import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface CustomNumeros {
    id: number;
    titulo: JSX.Element,
    btnText: string,
    hrefNumeros: string;
    numero: string;
}

const customNumeros: CustomNumeros[] = [
    {
        id: 1,
        titulo: <span>Los compradores pueden adquirir <br />fracciones de múltiples <br />propiedades en lugar de concentrar <br />todo su capital en un solo inmueble, <br />reduciendo el riesgo.</span>,
        btnText: 'Más información',
        hrefNumeros: '/PageTokenizacion',
        numero: '1'
    },
    {
        id: 2,
        titulo: <span>Al usar blockchain y fideicomisos, <br />se eliminan muchos intermediarios <br />tradicionales, lo que reduce los <br />costos de transacción.</span>,
        btnText: 'Más información',
        hrefNumeros: '/PageFideicomiso',
        numero: '2'
    },
    {
        id: 3,
        titulo: <span>Los tokens se pueden transferir <br />fácilmente entre compradores y <br />vendedores sin la necesidad de <br />trámites largos y complicados.</span>,
        btnText: 'Más información',
        hrefNumeros: '/PageWallet',
        numero: '3'
    },
]
const HomeNumeros = () => {
    return (
        <Box sx={{
            bgcolor: '#29184A',
            border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '25px',
                border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
            }}>
                <Typography sx={{
                    fontSize: '37px',
                    textAlign: {xs: 'center', sm: 'center', md: 'left', lg: 'left',},
                }}>
                    Ventajas frente a la venta tradicional de inmuebles.
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                flexWrap: 'wrap',
                // border: '1px solid red',
                padding: '0px 0px 100px 0px'
            }}>
                {customNumeros.map(({titulo, btnText, hrefNumeros, numero}, id) => (
                    <Box key={id} sx={{
                        border: '2px solid #524092', 
                        width: '430px',
                        height: '350px',
                        
                    }}>
                        <Box>
                            <Typography sx={{
                                fontSize: '150px',
                                // border: '1px solid red',
                                color: '#524092',
                                fontWeight: 900,
                                padding: {xs: '0px 25px', sm: '0px', md: '0px', lg: '0px',},                  
                            }}>
                                {numero}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{
                                width: '320px',
                                height: '105px',
                                // border: '1px solid red'
                                marginTop: '-50px',
                                marginLeft: '20px',
                                padding: {xs: '0px 25px', sm: '0px', md: '0px', lg: '0px',},   
                            }}>
                                {titulo}
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '50px'
                        }}>
                            <Link href={hrefNumeros}>
                                <Box sx={{
                                    background: '#524092',
                                    width: '200px',
                                    textAlign: 'center',
                                    borderRadius: '100px',
                                    padding: '5px 0px'
                                }}>
                                    {btnText}    
                                </Box>
                            </Link>    
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default HomeNumeros
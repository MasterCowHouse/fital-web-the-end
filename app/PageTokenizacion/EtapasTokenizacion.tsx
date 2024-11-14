import { Box, Typography } from "@mui/material";
import Image from "next/image";
import imagenEtapasDeLaTokenización from "@/public/img/imagenEtapasDeLaTokenizacion.png";

const EtapasTokenizacion = () => {
    return (
        <Box sx={{
            padding: '100px 0px'
        }}>
            <Box>
                <Typography sx={{
                    textAlign: 'center',
                    fontSize: {xs: '35px', sm: '60px', md: '60px', lg: '60px',},
                    color: '#FFC72C'
                }}>
                    Etapas de la Tokenización
                </Typography>
                <Typography sx={{
                    textAlign: 'center',
                    fontSize: {xs: '25px', sm: '40px', md: '40px', lg: '40px',},
                }}>
                    <span style={{color: '#26D3CA'}}>Mundo físico</span> en paralelo con <span style={{color: '#FFC72C'}}>Mundo virtual</span>
                </Typography>
            </Box>
            
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row',},
                marginTop: '100px'
            }}>
                <Box sx={{
                    textAlign: {xs: 'left', sm: 'left', md: 'right', lg: 'right',},
                    width: {xs: '350px', sm: '400px', md: 'auto', lg: 'auto',},
                    paddingLeft: {xs: '25px', sm: '0px', md: '0px', lg: '0px',},
                    // border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                }}>
                    <Typography sx={{
                        marginBottom: '50px',
                        color: '#26D3CA'
                    }}>
                        FIRMA DE CONTRATO DE SERVICIOS
                    </Typography>
                    <Typography sx={{
                        marginBottom: '50px',
                        marginRight: {xs: '100px', sm: '100px', md: '50px', lg: '100px',},
                    }}>
                        <span style={{color: '#26D3CA'}}>RECOLECCIÓN DE DATOS</span>
                        <br />
                        Requisitos para la constitució del 
                        <br />
                        fideicomiso, formato de datos 
                        <br />
                        generales del cliente y formato 
                        <br />
                        beneficiario controlador.
                    </Typography>
                    <Typography sx={{
                        marginBottom: '50px',
                        marginRight: {xs: '150px', sm: '150px', md: '100px', lg: '150px',},
                        color: '#26D3CA'
                    }}>
                        BALANCE DEL PATRIMONIO
                    </Typography>
                    <Typography sx={{
                        marginBottom: '50px',
                        marginRight: {xs: '150px', sm: '150px', md: '100px', lg: '150px',},
                        color: '#26D3CA'
                    }}>
                        SOLICITUD DE SERVICIO FIDUCIARIO
                    </Typography>
                    <Typography sx={{
                        marginBottom: '50px',
                        marginRight: {xs: '100px', sm: '100px', md: '50px', lg: '100px',},
                        color: '#26D3CA'
                    }}>
                        CREACIÓN DEL FIDEICOMISO
                    </Typography>
                    <Typography sx={{
                        marginBottom: '50px',
                        color: '#26D3CA'
                    }}>
                        APORTACIÓN DEL INMUEBLE
                    </Typography>
                </Box>
                <Box sx={{
                    transform: {xs: `rotate(45deg)`, sm: `rotate(45deg)`, md: `rotate(0deg)`, lg: `rotate(0deg)`,},
                    width: {xs: '70%', sm: '400px', md: '400px', lg: '400px',}
                }}>
                    <Image 
                        src={imagenEtapasDeLaTokenización}
                        alt="img"
                        
                    />
                </Box>
                <Box sx={{
                    textAlign: {xs: 'right', sm: 'right', md: 'left', lg: 'left',},
                    width: {xs: '350px', sm: 'auto', md: 'auto', lg: 'auto',},
                    paddingRight: {xs: '25px', sm: '0px', md: '0px', lg: '0px',},
                }}>
                    <Typography sx={{
                        marginBottom: '50px',
                        
                    }}>
                        <span style={{color: '#FFC72C'}}>HRECOLECCIÓN DE DATOS</span>
                        <br />
                        Recabación de datos de la
                        <br />
                        propiedad.
                    </Typography>
                    <Typography sx={{
                        marginBottom: '50px',
                        marginLeft: {xs: '100px', sm: '100px', md: '50px', lg: '100px',},
                    }}>
                        <span style={{color: '#FFC72C'}}>SMART CONTRACT</span>
                        <br />
                        Se desarrolla un contrato 
                        <br />
                        inteligente en blockchain para 
                        <br />
                        respaldar el token.
                    </Typography>
                    <Typography sx={{
                        marginBottom: '50px',
                        marginLeft: {xs: '150px', sm: '150px', md: '100px', lg: '150px',},
                    }}>
                        <span style={{color: '#FFC72C'}}>TOKENIZACIÓN</span>
                        <br />
                        Se crea una colección del 
                        <br />
                        proyecto, es decir, los tokens de 
                        <br />
                        la propiedad.
                    </Typography>
                    <Typography sx={{
                        marginBottom: '50px',
                        marginLeft: {xs: '100px', sm: '100px', md: '50px', lg: '100px',},
                    }}>
                        <span style={{color: '#FFC72C'}}>DESARROLLO PTI</span>
                        <br />
                        Se crea una plataforma de 
                        <br />
                        tokenización inmobiliaria para la 
                        <br />
                        comercialización.
                    </Typography>
                    <Typography>
                        <span style={{color: '#FFC72C'}}>GESTIÓN Y DISTRIBUCIÓN</span>
                        <br />
                        Los ingresos generados por la 
                        <br />
                        venta de los tokens se 
                        <br />
                        distribuyen directamente 
                        <br />
                        en su proyecto.
                    </Typography>
                </Box>
            </Box>
            {/* //responsive */}
            <Box>
                
            </Box>
        </Box>
    )
}

export default EtapasTokenizacion
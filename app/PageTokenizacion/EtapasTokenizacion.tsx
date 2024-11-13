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
                    fontSize: '60px',
                    color: '#FFC72C'
                }}>
                    Etapas de la Tokenización
                </Typography>
                <Typography sx={{
                    textAlign: 'center',
                    fontSize: '40px'
                }}>
                    <span style={{color: '#26D3CA'}}>Mundo físico</span> en paralelo con <span style={{color: '#FFC72C'}}>Mundo virtual</span>
                </Typography>
            </Box>
            {/* <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',   
                // padding: '100px 100px 0px 0px' ,
                padding: {xs: '100px 0px 0px 0px', sm: '100px 0px 0px 0px', md: '100px 100px 0px 100px', lg: '100px 50px 0px 0px'},
                flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row'},
                border: '1px solid red'                         
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',   
                    flexDirection: {xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row'},
                    border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red'},
                }}>
                    <Box sx={{
                        // border: '2px solid red',
                        width: '100%'
                    }}>
                        <Typography sx={{
                            marginBottom: '50px',
                            color: '#FFC72C',
                            textAlign: "right",
                            marginLeft: '0px',
                            
                        }}>
                            FIRMA DE CONTRATO DE SERVICIOS
                        </Typography>
                        <Typography sx={{
                            color: '#FFC72C',
                            textAlign: "right",
                            marginRight: '100px',
                        }}>
                            RECOLECCIÓN DE DATOS
                        </Typography>
                        <Typography sx={{
                            marginBottom: '50px',
                            textAlign: "right",
                            marginRight: '100px',
                        }}>
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
                            color: '#FFC72C',
                            textAlign: "right",
                            marginRight: '180px',
                            
                        }}>
                            BALANCE DEL PATRIMONIO
                        </Typography>
                        <Typography sx={{
                            marginBottom: '50px',
                            color: '#FFC72C',
                            textAlign: "right",
                            marginRight: '180px',
                        }}>
                            SOLICITUD DE SERVICIO FIDUCIARIO
                        </Typography>
                        <Typography sx={{
                            marginBottom: '50px',
                            color: '#FFC72C',
                            textAlign: "right",
                            marginRight: '100px',
                        }}>
                            CREACIÓN DEL FIDEICOMISO
                        </Typography>
                        <Typography sx={{
                            marginBottom: '50px',
                            color: '#FFC72C',
                            textAlign: "right",
                            marginRight: '0px',
                        }}>
                            APORTACIÓN DEL INMUEBLE
                        </Typography>
                    </Box>
                    <Box sx={{
                        border: '2px solid red',
                        // width: '25%',
                        width: {xs: '100%', sm: '100%', md: '25%', lg: '100%'},
                        // position: 'absolute',
                        position: {xs: 'unset', sm: 'unset', md: 'absolute', lg: 'unset'},
                        // marginLeft: '400px',
                        marginLeft: {xs: '0px', sm: '0px', md: '500px', lg: '0px'},
                    }}>
                        <Image 
                            src={imagenEtapasDeLaTokenización}
                            alt="Etapas de la Tokenización"
                        />
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',   
                    flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row'},
                    border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red'},
                }}>
                    <Box sx={{
                        // border: '2px solid red',
                        width: '100%'
                    }}>
                        <Typography sx={{
                            color: '#26D3CA',
                            // textAlign: 'right',
                            
                        }}>
                            RECOLECCIÓN DE DATOS
                        </Typography>
                        <Typography sx={{
                            // textAlign: 'right',
                            marginBottom: '50px',
                        }}>
                            Recabación de datos 
                            <br />
                            de la propiedad.
                        </Typography>
                        <Typography sx={{
                            // textAlign: 'right',
                            color: '#26D3CA',
                            marginLeft: '150px'
                        }}>
                            SMART CONTRACT
                        </Typography>
                        <Typography sx={{
                            // textAlign: 'right',
                            marginBottom: '50px',
                            marginLeft: '150px'
                        }}>
                            Se desarrolla un contrato inteligente 
                            <br /> 
                            en blockchain para respaldar el token.
                        </Typography>
                        <Typography sx={{
                            // textAlign: 'right',
                            color: '#26D3CA',
                            marginLeft: '250px'
                        }}>
                            TOKENIZACIÓN
                        </Typography>
                        <Typography sx={{
                            // textAlign: 'right',
                            marginBottom: '50px',
                            marginLeft: '250px'
                        }}>
                            Se crea una colección del proyecto, 
                            <br />
                            es decir, los tokens de la propiedad.
                        </Typography>
                        <Typography sx={{
                            // textAlign: 'right',
                            color: '#26D3CA',
                            marginLeft: '150px'
                        }}>
                            DESARROLLO PTI
                        </Typography>
                        <Typography sx={{
                            // textAlign: 'right',
                            marginBottom: '50px',
                            marginLeft: '150px'
                        }}>
                            Se crea una plataforma de 
                            <br />
                            tokenización inmobiliaria 
                            <br />
                            para la comercialización.
                        </Typography>
                        <Typography sx={{
                            // textAlign: 'right',
                            color: '#26D3CA',
                        }}>
                            GESTIÓN Y DISTRIBUCIÓN
                        </Typography>
                        <Typography sx={{
                            // textAlign: 'right'
                        }}>
                            Los ingresos generados 
                            <br />
                            por la venta de los tokens
                            <br />
                            se distribuyen directamente 
                            <br />
                            en su proyecto.
                        </Typography>
                    </Box>
                </Box>
            </Box> */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid red',
                flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row',},
                marginTop: '100px'
            }}>
                <Box sx={{
                    border: '1px solid red',
                    // textAlign: 'right',
                    textAlign: {xs: 'left', sm: 'left', md: 'right', lg: 'right',},
                    width: {xs: '350px', sm: '400px', md: 'auto', lg: 'auto',},
                    // marginLeft: {xs: '50px', sm: '0px', md: '0px', lg: '0px',},
                    
                }}>
                    <Typography sx={{
                        marginBottom: '50px',
                        color: '#26D3CA'
                    }}>
                        FIRMA DE CONTRATO DE SERVICIOS
                    </Typography>
                    <Typography sx={{
                        marginBottom: '50px',
                        // marginRight: '100px'
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
                        // marginRight: '150px',
                        marginRight: {xs: '150px', sm: '150px', md: '100px', lg: '150px',},
                        color: '#26D3CA'
                    }}>
                        BALANCE DEL PATRIMONIO
                    </Typography>
                    <Typography sx={{
                        marginBottom: '50px',
                        // marginRight: '150px',
                        marginRight: {xs: '150px', sm: '150px', md: '100px', lg: '150px',},
                        color: '#26D3CA'
                    }}>
                        SOLICITUD DE SERVICIO FIDUCIARIO
                    </Typography>
                    <Typography sx={{
                        marginBottom: '50px',
                        // marginRight: '100px',
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
                    // border: '1px solid red',
                    border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                    transform: {xs: `rotate(45deg)`, sm: `rotate(45deg)`, md: `rotate(0deg)`, lg: `rotate(0deg)`,},
                    width: {xs: '70%', sm: '400px', md: '400px', lg: '400px',}
                }}>
                    <Image 
                        src={imagenEtapasDeLaTokenización}
                        alt="img"
                        // width={400}
                    />
                </Box>
                <Box sx={{
                    border: '1px solid red',
                    textAlign: {xs: 'right', sm: 'right', md: 'left', lg: 'left',},
                    // marginRight: {xs: '50px', sm: '0px', md: '0px', lg: '0px',},
                    width: {xs: '350px', sm: 'auto', md: 'auto', lg: 'auto',},
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
                        // marginLeft: '100px'
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
                        // marginLeft: '150px',
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
                        // marginLeft: '100px',
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
                    <Typography sx={{
                        // marginBottom: '50px'
                    }}>
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
        </Box>
    )
}

export default EtapasTokenizacion
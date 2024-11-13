import { Box, Typography } from "@mui/material";
import Image from "next/image";
import imgERC from "@/public/img/imgERC.png"

interface CustomPuntosERC {
    id: number;
    texto: JSX.Element;
}

const customPuntosERC: CustomPuntosERC[] = [
    {
        id: 1,
        texto: 
        <span>
            Proporciona un marco flexible y seguro que permite representar digitalmente
            <br />
            propiedades y otros activos físicos.
        </span>
    },
    {
        id: 2,
        texto: 
        <span>
            Facilita su transferencia y gestión en un entorno descentralizado.
        </span>
    },
    {
        id: 3,
        texto: 
        <span>
            El ERC-3643 asegura la conformidad legal y mejora la interoperabilidad entre 
            <br />
            diferentes plataformas. 
        </span>
    },
]

const ERC = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
            flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row',},
            padding: '100px 0px'
        }}>
            <Box sx={{
                padding: {xs: '0px 20px', sm: '0px 20px', md: '0px', lg: '0px',},
            }}>
                <Box sx={{
                    marginBottom: '50px',
                    border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                    marginLeft: {xs: '0px', sm: '0px', md: '100px', lg: '100px',},
                }}>
                    <Typography sx={{
                        fontSize: '35px'
                    }}>
                        <span style={{color: '#FFC72C'}}>Estándar ERC-3643:</span> Potenciando la <span style={{fontWeight: 900,}}>Tokenización de <br /> Activos</span> del Mundo Real (RWA)
                    </Typography>
                </Box>
                <Box sx={{
                    // border: '1px solid red',
                    display: 'flex',
                    alignItems: 'start',
                    flexDirection: 'column',
                    marginLeft: {xs: '0px', sm: '0px', md: '100px', lg: '100px',},
                    border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                }}>
                    {customPuntosERC.map(({texto}, id) => (
                        <Box key={id} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '25px'
                        }}>
                            <Box>
                                <Box sx={{
                                    backgroundColor: '#FFC72C',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '100px',
                                }}>
                                    {/* Circulos */}
                                </Box>
                            </Box>
                            <Box sx={{
                                marginLeft: '15px'
                            }}>
                                <Typography>
                                    {texto}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box sx={{
                    marginLeft: {xs: '0px', sm: '0px', md: '100px', lg: '100px',},
                    border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                }}>
                    <Typography sx={{
                        color: '#FFC72C'
                    }}>
                        Beneficios:
                    </Typography>
                </Box>
                <Box sx={{
                    marginLeft: {xs: '0px', sm: '0px', md: '100px', lg: '100px',},
                    border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                }}>
                    <Typography>
                        <span style={{ fontWeight: 900,}}>Seguridad:</span> Refuerza la confianza en transacciones con activos tokenizados.
                        <br /> 
                        <span style={{ fontWeight: 900,}}>Flexibilidad:</span> Adaptable a diferentes tipos de activos físicos.
                        <br /> 
                        <span style={{ fontWeight: 900,}}>Cumplimiento Legal:</span> Garantiza conformidad con regulaciones actuales.
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Image 
                    src={imgERC}
                    alt='Estándar ERC-3643'
                />
            </Box>
        </Box>
    )
}

export default ERC
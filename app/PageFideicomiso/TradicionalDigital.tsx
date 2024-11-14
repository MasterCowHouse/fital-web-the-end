import { Box, Typography } from "@mui/material"

interface CustomFideicomiso {
    id: number;
    textoUno: JSX.Element;
    icono: string;
    textIcono: JSX.Element;
    textAlt: string;
    textoDos: JSX.Element;
}

const customFideicomiso: CustomFideicomiso[] = [
    {
        id: 1,
        textoUno: <span>Tradicional: Requiere papeleo y <br /> trámites legales presenciales.</span>,
        icono: '../img/Procesodecreacion.svg',
        textIcono: <span>Proceso de <br />creación</span>,
        textAlt: 'Proceso de creación',
        textoDos: <span>Digital: Se gestiona en línea de forma <br />rápida y sencilla.</span>,
    },
    {
        id: 2,
        textoUno: <span>Tradicional: Manual y burocrática.</span>,
        icono: '../img/Gestiondebienes.svg',
        textIcono: <span>Gestión de <br />bienes</span>,
        textAlt: 'Gestión de bienes',
        textoDos: <span>Digital: Automatizada y más eficiente, <br />usando contratos inteligentes.</span>,
    },
    {
        id: 3,
        textoUno: <span>Tradicional: Depende de reportes y la <br />información no es accesible en tiempo <br />real.</span>,
        icono: '../img/TransparenciaySeguridad.svg',
        textIcono: <span>Transparencia y <br />Seguridad</span>,
        textAlt: 'Transparencia y Seguridad',
        textoDos: <span>Digital: Transparente y seguro gracias a <br />Blockchain, con acceso en tiempo real.</span>,
    },
    {
        id: 4,
        textoUno: <span>Tradicional: Cambios complicados y <br />requieren nuevos trámites.</span>,
        icono: '../img/Flexibilidad.svg',
        textIcono: <span>Flexibilidad</span>,
        textAlt: 'Flexibilidad',
        textoDos: <span>Digital: Más flexible y modificaciones al <br />instante.</span>,
    },
    {
        id: 5,
        textoUno: <span>Tradicional: Más caro por los <br />intermediarios y trámites.</span>,
        icono: '../img/Costos.svg',
        textIcono: <span>Costos</span>,
        textAlt: 'Costos',
        textoDos: <span>Digital: Menos costoso, al eliminar <br />intermediarios.</span>,
    },
]

const TradicionalDigital = () => {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                
            }}>
                <Typography sx={{
                    fontSize: {xs: '30px', sm: '40px', md: '40px', lg: '50px',},
                    width: {xs: '100%', sm: '100%', md: '100%', lg: '100%',},
                    textAlign: {xs: 'center', sm: 'center', md: 'center', lg: 'center',},
                    
                }}>
                    Fideicomiso Tradicional <span style={{color: '#FFC72C', fontWeight: 900}}>VS</span> Fideicomiso Digital
                </Typography>
            </Box>
            <Box sx={{
                marginTop: '50px',
                
            }}>
                {customFideicomiso.map(({textoUno, icono, textIcono, textAlt, textoDos}, id) => (
                    <Box key={id} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '50px'
                    }}>
                        <Box sx={{
                            bgcolor: '#2B214C',
                            width: {xs: '150px', sm: '400px', md: '400px', lg: '400px',},
                            height: '130px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'start'
                        }}>
                            <Typography sx={{
                                padding: {xs: '10px 10px', sm: '10px 15px', md: '10px 50px', lg: '10px 50px',},
                                fontSize: {xs: '12px', sm: '14px', md: '16px', lg: '16px',},
                                width: {xs: '100px', sm: '100%', md: '100%', lg: '100%',},
                                height: {xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto',},
                                
                            }}>
                                {textoUno}
                            </Typography>
                        </Box>
                        <Box sx={{
                            bgcolor: '#FFC72C',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            borderRadius: '25px',
                            width: {xs: '30%', sm: 'auto', md: 'auto', lg: '200px',},
                            height: {xs: '200px', sm: '200px', md: '200px', lg: '200px',},
                            
                        }}>
                            <Box 
                                component={'img'}
                                src={icono}
                                alt={textAlt}
                                sx={{
                                    
                                    width: '100px',
                                    height: '100px'
                                }}
                            />
                            <Typography sx={{
                                textAlign: 'center',
                                color: '#524092',
                                fontWeight: 900,
                                
                                width: '130px',
                                wordWrap: {xs: 'normal', sm: 'break-word', md: 'break-word', lg: 'break-word',},
                            }}>
                                {textIcono}
                            </Typography>
                        </Box>
                        <Box sx={{
                            bgcolor: '#2B214C',
                            width: {xs: '150px', sm: '400px', md: '400px', lg: '400px',},
                            height: '130px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography sx={{
                                padding: {xs: '10px 10px', sm: '10px 15px', md: '10px 50px', lg: '10px 50px',},
                                fontSize: {xs: '12px', sm: '14px', md: '16px', lg: '16px',},
                                width: {xs: '100px', sm: '100%', md: '100%', lg: '100%',},
                                height: {xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto',},
                                
                            }}>
                                {textoDos}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default TradicionalDigital
import { Box, Typography, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import corazon from "@/public/img/corazon.svg";

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface CustomLinks {
    id: number;
    ruta: string;
    links: string;
}

const customLinks: CustomLinks[] = [
    {
        id: 1,
        ruta: '/',
        links: 'Septimbre 2023'
    },
    {
        id: 1,
        ruta: '/',
        links: 'Octubre 2023'
    },
    {
        id: 1,
        ruta: '/',
        links: 'Noviembre 2023'
    },
]

const Articulo = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: {xs: 'center', sm: 'start', md: 'start', lg: 'start',},
            justifyContent: 'center',
            flexDirection: {xs: 'column-reverse', sm: 'row', md: 'row', lg: 'row',},
            bgcolor: 'white',
            
        }}>
            <Box sx={{
                marginTop: '100px',
                marginBottom: '100px',
                border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
                width: {xs: '90%', sm: '60%', md: '70%', lg: '70%',},
            }}>
                <Box>
                    <Box
                        component={'img'} 
                        // src={bgArticulo}
                        src="../img/bgArticulo.jpg"
                        alt="Articulo Blog"
                        sx={{
                            width: {xs: '100%', sm: '90%', md: '90%', lg: '70%',},
                            // border: '1px solid red',
                            // width: {xs: '100%', sm: '100%', md: '70%', lg: '100%',},
                        }}
                    />
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: '40px',
                        color: '#524092',
                        // border: '1px solid red',
                        // width: {xs: '100%', sm: '100%', md: '70%', lg: '100%',},
                    }}>
                        La <span style={{color: '#FFC72C'}}>evolución del Fideicomiso</span> 
                        <br />
                        tradicional al digital.
                    </Typography>
                    <Typography sx={{
                        color: '#FFC72C',
                        // border: '1px solid red',
                        // width: {xs: '100%', sm: '100%', md: '70%', lg: '100%',},
                    }}>
                        16 de Octubre 2023
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        // border: '1px solid red',
                        // width: {xs: '100%', sm: '100%', md: '70%', lg: '100%',},
                        borderTop: '1px solid grey',
                        width: '200px'
                    }}>
                        <Typography sx={{
                            color: '#524092'
                        }}>
                            5
                        </Typography>
                        <Image 
                            src={corazon}
                            alt="Puntaje Articulo"
                            width={15}
                            height={15}
                        />
                    </Box>
                </Box>
                <Box sx={{
                    // border: '1px solid red',
                    // width: {xs: '100%', sm: '100%', md: '70%', lg: '100%',},
                    marginTop: '50px'
                }}>
                    <Typography sx={{
                        color: 'black'
                    }}>
                        <span style={{color: '#524092', fontWeight: 900, fontSize: '20px'}}>¿Qué es un fideicomiso digital y sus beneficios para inmuebles?</span> 
                        <br />
                        <br />
                        Un fideicomiso tradicional es un acuerdo en el que una persona o 
                        <br />
                        empresa, llamada fideicomitente, pone sus bienes (como dinero,
                        <br /> 
                        propiedades o inversiones) bajo el control de otra institución, 
                        <br />
                        llamada fiduciario, para que los maneje y proteja. Estos bienes se 
                        <br />
                        gestionan según las instrucciones que el fideicomitente 
                        <br />
                        estableció, con el objetivo de beneficiar a una tercera persona o 
                        <br />
                        grupo, llamados fideicomisarios. 
                        <br />
                        <br />
                        Por ejemplo, imagina que tienes una casa y quieres asegurarte de 
                        <br />
                        que, cuando ya no estés, esa casa se pase a tus hijos de manera
                        <br /> 
                        segura y sin complicaciones legales. Creas un fideicomiso, donde 
                        <br />
                        pones la casa bajo el cuidado de un fiduciario, quien se asegurará 
                        <br />
                        de que, cuando llegue el momento, tus hijos reciban la casa según
                        <br /> 
                        tus deseos. El fiduciario se encarga de que todo se haga como lo
                        <br /> 
                        planeaste. 
                        <br />
                        <br />
                        En el mundo digital, los fideicomisos han evolucionado para 
                        <br />
                        ofrecer una gestión más eficiente y segura de los activos,
                        <br /> 
                        especialmente cuando se trata de inmuebles. 
                        <br />
                        Un fideicomiso digital es una versión moderna que utiliza 
                        <br />
                        tecnologías como blockchain para administrar propiedades de
                        <br /> 
                        manera más transparente y accesible. 
                        <br />
                        <br />
                        <span style={{color: '#524092', fontWeight: 900, fontSize: '20px'}}>Beneficios de un Fideicomiso Digital en Inmuebles:</span> 
                        <br />
                        <br />
                        <span style={{color: '#524092'}}>1. Seguridad Mejorada:</span> Utilizando tecnología blockchain, 
                        <br />
                        las transacciones son inmutables y altamente seguras. 
                        <br />
                        <br />
                        <span style={{color: '#524092'}}>2. Gestión Remota:</span> Permite la administración de inmuebles 
                        <br />
                        desde cualquier lugar del mundo. 
                        <br />
                        <br />
                        <span style={{color: '#524092'}}>3. Eficiencia en Costos:</span> Reduce los costos administrativos 
                        <br />
                        mediante la automatización de procesos.
                        <br />
                        <br />
                        <span style={{color: '#524092'}}>4. Transparencia Total:</span> Todas las transacciones son auditables y
                        <br />
                        visibles en tiempo real. 
                        <br />
                        <br />
                        <span style={{color: '#524092'}}>En FITAL nos aseguramos de proteger tu patrimonio y hacer que 
                        <br />
                        tus reglas se cumplan, contamos con una plataforma llamada </span>
                        <br />
                        <span style={{color: '#524092', fontWeight: 900}}>Imperio donde administras tus bienes y asignas beneficiarios 
                        <br />
                        según tus reglas. </span>
                        <br />
                        <span style={{color: '#524092', fontWeight: 900}}>Entra ahora y comienza a ser parte de la revolución tecnológica.</span>
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                marginTop: {xs: '50px', sm: '100px', md: '100px', lg: '100px',},
                border: '1px solid red',
                width: {xs: '90%', sm: '35%', md: '25%', lg: '25%',}
            }}>
                <Box sx={{
                    display: 'flex'
                }}>
                    <TextField
                        placeholder="Buscar post"
                        variant="outlined"
                        required={true}
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: '2px solid #524092',
                                borderRadius: '50px',
                                        
                            },
                            //estilos para el hover del input
                            "&:hover:not(.Mui-focused)": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                    // borderColor: 'white',
                                    borderColor: '#524092',
                                    // // borderWidth: '2px',
                                    // borderRadius: '27px'
                                },
                            },
                            //estilos para el input cuando esta en focus entra y sale el cursor del campo
                            " .Mui-focused": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                        // borderColor: 'white',
                                        borderColor: '#524092',
                                        // borderWidth: '2px',
                                        // borderRadius: '27px'
                                    },
                            },
                        }}
                    />
                    <Box sx={{
                        backgroundColor: '#524092',
                        borderRadius: '100px',
                        width: '55px',
                        height: '55px',
                        marginLeft: '-50px',
                    }}>
                        <IconButton type="button" sx={{ 
                            p: '15px', 
                            // border: '1px solid red',
                            // backgroundColor: '#524092',
                            color: 'white',
                            // marginLeft: '-50px',
                            // position: 'absolute'
                            // "& :hover": {
                            //     color: 'red',
                            //     backgroundColor: '#524092',
                            //     padding: '15px',
                                
                            // }
                        }} 
                        aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{
                    marginTop: '50px'
                }}>
                    <Typography sx={{
                        color: '#524092',
                        fontSize: '25px',
                        borderBottom: '2px solid #FFC72C'
                    }}>
                        Más Post
                    </Typography>
                </Box>
                {customLinks.map(({ruta, links}, id) => (
                    <Box key={id}>
                        <Link href={ruta} style={{
                            color: '#606060',
                            textDecoration: 'underline'
                        }}>
                            {links}
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Articulo
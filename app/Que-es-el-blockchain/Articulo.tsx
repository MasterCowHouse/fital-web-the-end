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
                width: {xs: '90%', sm: '60%', md: '70%', lg: '70%',},
            }}>
                <Box>
                    <Box
                        component={'img'} 
                        // src="../img/bgArticulo.jpg"
                        src="../img/Que-es-el-blockchain.png"
                        alt="¿Qué es el blockchain?"
                        sx={{
                            width: {xs: '100%', sm: '90%', md: '90%', lg: '70%',},
                            // height: '330px'
                        }}
                    />
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: '40px',
                        color: '#524092',
                    }}>
                        ¿Qué es el blockchain? 
                        <br />
                        ¿Qué ventajas tiene adentrarse 
                        <br />
                        al mundo del blockchain?
                    </Typography>
                    <Typography sx={{
                        color: '#FFC72C',
                    }}>
                        16 de Octubre 2023
                    </Typography>
                    <Box sx={{
                        display: 'flex',
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
                    marginTop: '50px'
                }}>
                    <Typography sx={{
                        color: 'black'
                    }}>
                        
                        En los últimos años, el término blockchain ha estado en boca de todos, y no es para menos. 
                        <br />
                        Aunque muchos lo asocian únicamente con las criptomonedas como Bitcoin, esta tecnología es mucho más que eso. 
                        <br />
                        Blockchain es una revolución tecnológica que está transformando industrias enteras, 
                        <br />
                        desde el sector financiero hasta el inmobiliario, pasando por la salud, la logística y más.
                        <br />
                        Pero, ¿por qué deberías adentrarte en este mundo? En este artículo, te explicaremos las ventajas clave de sumergirte 
                        <br />
                        en el universo del blockchain
                        <br />
                        <br />
                        <span style={{color: '#524092', fontWeight: 900, fontSize: '20px'}}>¿Qué es Blockchain?</span> 
                        <br />
                        <br />
                        Antes de hablar de ventajas, te explicaremos que es, Blockchain es una tecnología de registro distribuido que permite 
                        <br />
                        almacenar información de manera segura, inmutable y transparente. 
                        <br />
                        Imagina un libro de contabilidad digital que no está controlado por una sola entidad, sino que está distribuido 
                        <br />
                        en miles de computadoras en todo el mundo.
                        <br />
                        Gracias a su estructura descentralizada, blockchain garantiza que las transacciones sean verificables y 
                        <br />
                        seguras, eliminando intermediarios y reduciendo costos.
                        <br />
                        <br />
                        <span style={{color: '#524092', fontWeight: 900, fontSize: '20px'}}>
                            <Image 
                                src='/img/Que-es-el-blockchain-2.png'
                                alt=""
                                width={700}
                                height={700}
                            />
                        </span> 
                        <br />
                        <br />
                        <span style={{color: '#524092'}}>Ventajas de Adentrarte en el Mundo del Blockchain</span>
                        <br />
                        <br />
                        <span style={{color: '#524092'}}>1. Transparencia Total:</span> 
                        <br />
                        Blockchain registra cada transacción de manera permanente y visible para todos los participantes de la red. 
                        <br />
                        Esto elimina la opacidad en procesos empresariales, financieros o incluso gubernamentales. Por ejemplo:
                        <br />
                        &bull;En las cadenas de suministro, blockchain permite rastrear cada paso de un producto 
                        <br />
                        desde su origen hasta el consumidor final.
                        <br />
                        &bull;En el sector inmobiliario, garantiza que los registros de propiedad sean transparentes y 
                        <br />
                        no puedan ser manipulados.
                        <br />
                        <br />
                        <span style={{color: '#524092'}}>2. Seguridad y Confianza:</span> 
                        <br />
                        Gracias a la criptografía, el blockchain es extremadamente seguro. 
                        <br />
                        Cada transacción está protegida por complejos algoritmos que dificultan 
                        <br />
                        cualquier tipo de hackeo o alteración. Además:
                        <br />
                        &bull;Su estructura inmutable asegura que una vez que algo está registrado, 
                        <br />
                        no puede ser modificado ni eliminado.
                        <br />
                        &bull;En sectores como el financiero, elimina el riesgo de fraudes y errores humanos.
                        <br />
                        <br />
                        <span style={{color: '#524092'}}>3. Elimina Intermediarios:</span> 
                        <br />
                        Adentrarte en el mundo del blockchain significa simplificar procesos. 
                        <br />
                        Esta tecnología elimina intermediarios innecesarios, como bancos o notarios, 
                        <br />
                        lo que reduce costos y acelera los tiempos. Por ejemplo:
                        <br />
                        &bull;En la compra de propiedades, blockchain puede reemplazar intermediarios 
                        <br />
                        al verificar transacciones de manera automática.
                        <br />
                        &bull;En el envío de dinero internacional, reduce los costos y tiempos de transferencia drásticamente.
                        <br />
                        <br />
                        <span style={{color: '#524092'}}>4. Acceso a Nuevas Oportunidades de Inversión:</span>
                        <br />
                        El blockchain abre un abanico de opciones de inversión, como:
                        <br />
                        <span style={{color: '#524092', fontWeight: 900}}>&bull;Criptomonedas:</span>Desde Bitcoin hasta proyectos emergentes.
                        <br />
                        <span style={{color: '#524092', fontWeight: 900}}>&bull;NFTs (Tokens No Fungibles):</span>Representación digital de arte, música, bienes raíces y más.
                        <br />
                        <span style={{color: '#524092', fontWeight: 900}}>&bull;Tokenización de Activos:</span>Invertir en fracciones de propiedades o bienes tangibles.
                        <br />
                        Esto democratiza las oportunidades, permitiendo que más personas participen 
                        <br />
                        en mercados que antes estaban reservados para grandes inversionistas.
                        <br />
                        <br />
                        <span style={{color: '#524092'}}>5. Innovación en la Economía Digital:</span>
                        <br />
                        Blockchain es la base de la Web 3, la próxima generación de Internet. Esto incluye:
                        <br />
                        <span style={{color: '#524092', fontWeight: 900}}>&bull;Finanzas Descentralizadas (DeFi):</span>Servicios financieros sin bancos ni intermediarios.
                        <br />
                        <span style={{color: '#524092', fontWeight: 900}}>&bull;Aplicaciones Descentralizadas (dApps):</span>Apps sin un control centralizado, que ofrecen mayor privacidad y autonomía.
                        <br />
                        <span style={{color: '#524092', fontWeight: 900}}>&bull;Metaverso:</span>Espacios virtuales donde blockchain permite poseer y comerciar activos digitales.
                        <br />
                        Participar en este ecosistema te posiciona como un innovador en una de las áreas tecnológicas más prometedoras.
                        <br />
                        <br />
                        <span style={{color: '#524092'}}>6. Desarrollo Profesional y Nuevas Carreras</span>
                        <br />
                        La demanda de talento en blockchain está en auge. Aprender sobre esta tecnología puede abrirte puertas a carreras como:
                        <br />
                        &bull;Desarrollador de blockchain.
                        <br />
                        &bull;Especialista en contratos inteligentes.
                        <br />
                        &bull;Consultor en tokenización.
                        <br />
                        &bull;Inversionista o analista de criptomonedas.
                        <br />
                        Es una excelente oportunidad para adquirir habilidades que serán esenciales en el futuro.
                        <br />
                        <br />
                            <Image 
                                src='/img/Que-es-el-blockchain-3.png'
                                alt=""
                                width={700}
                                height={700}
                            />
                        <br />
                        <br />
                        <span style={{color: '#524092', fontWeight: 900, fontSize: '20px'}}>¿Por qué es el momento perfecto para entrar en el mundo del Blockchain?</span>
                        <br />
                        <br />
                        Aunque blockchain ya lleva algunos años en el radar, todavía está en sus primeras etapas de adopción. 
                        <br />
                        Esto significa que:
                        <br />
                        <span style={{color: '#524092', fontWeight: 900}}>&bull;Las oportunidades son enormes:</span>Puedes ser de los primeros en tu sector en implementar esta tecnología.
                        <br />
                        <span style={{color: '#524092', fontWeight: 900}}>&bull;El crecimiento es imparable:</span>Según analistas, la industria blockchain seguirá creciendo exponencialmente en los próximos años.
                        <br />
                        <span style={{color: '#524092', fontWeight: 900}}>&bull;Es una ventaja competitiva:</span>Tanto para negocios como para individuos, 
                        <br />
                        conocer blockchain puede marcar la diferencia frente a la competencia.
                        <br />
                        <br />
                        Adentrarte en el mundo del blockchain no es solo una decisión tecnológica, sino una apuesta por el futuro. 
                        <br />
                        Esta tecnología está transformando industrias y ofreciendo oportunidades únicas 
                        <br />
                        para quienes están dispuestos a aprender y adaptarse.
                        <br />
                        <br />
                            {/* <hr /> */}
                        <br />
                        Si estás listo para dar el siguiente paso, 
                        <br />
                        <Link href={'/PageContacto'} style={{
                            textDecorationLine: 'underline'
                        }}>
                            {/* <Typography sx={{
                                textDecorationLine: 'underline'
                            }}> */}
                                explora cómo FITAL puede ayudarte a aprovechar el blockchain en bienes raíces
                            {/* </Typography> */}
                        </Link>
                    </Typography>
                </Box>
                <Box>
                    <Box>
                        <Typography sx={{
                            color: 'black',
                            fontSize: '40px',
                            pt: 10
                        }}>
                            También podría interesarte:
                        </Typography>
                    </Box>
                    <hr />
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: {xs: 'center', sm: 'normal', md: 'normal', lg: 'normal',},
                        flexWrap: 'wrap'
                    }}>
                        <Box sx={{
                            // padding: {xs:'25px', sm:'100px', md:'100px', lg:'100px',},
                            padding: '20px',
                        }}>
                            <Box sx={{
                                backgroundImage: 'url(../img/bgUno.jpg)',
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: {xs:'350px', sm:'300px', md:'300px', lg:'300px',},
                                height: {xs:'350px', sm:'300px', md:'300px', lg:'300px',},
                                display: 'flex',
                                alignItems: 'flex-end',
                                
                            }}>
                                <Box sx={{
                                    marginTop: {xs:'200px', sm:'150px', md:'150px', lg:'150px',},
                                    padding: '0px 0px 20px 20px',
                                }}>
                                    <Box>
                                        <Typography>
                                            FitalCoin:
                                        </Typography>
                                        <Typography>
                                            La primera cryptomoneda respaldada por inmuebles en México
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{
                                marginTop: '25px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Link href={'/'}>
                                    <Typography sx={{
                                        border: '2px solid #FFC72C',
                                        borderRadius: '50px',
                                        width: '150px',
                                        textAlign: 'center',
                                        padding: '10px 0px',
                                        color: 'black'
                                    }}>
                                        Leer más
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box sx={{
                            // padding: {xs:'25px', sm:'100px', md:'100px', lg:'100px',},
                            padding: '20px',
                        }}>
                            <Box sx={{
                                backgroundImage: 'url(../img/bgUno.jpg)',
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: {xs:'350px', sm:'300px', md:'300px', lg:'300px',},
                                height: {xs:'350px', sm:'300px', md:'300px', lg:'300px',},
                                display: 'flex',
                                alignItems: 'flex-end',
                                
                            }}>
                                <Box sx={{
                                    marginTop: {xs:'200px', sm:'150px', md:'150px', lg:'150px',},
                                    padding: '0px 0px 20px 20px',
                                }}>
                                    <Box>
                                        <Typography>
                                            ¿Qué es la Tokenización Inmobiliaria?
                                        </Typography>
                                        <Typography>
                                            Guía Completa para Principiantes
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{
                                marginTop: '25px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Link href={'/'}>
                                    <Typography sx={{
                                        border: '2px solid #FFC72C',
                                        borderRadius: '50px',
                                        width: '150px',
                                        textAlign: 'center',
                                        padding: '10px 0px',
                                        color: 'black'
                                    }}>
                                        Leer más
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box sx={{
                           // padding: {xs:'25px', sm:'100px', md:'100px', lg:'100px',},
                           padding: '20px',
                        }}>
                            <Box sx={{
                                backgroundImage: 'url(../img/bgUno.jpg)',
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: {xs:'350px', sm:'300px', md:'300px', lg:'300px',},
                                height: {xs:'350px', sm:'300px', md:'300px', lg:'300px',},
                                display: 'flex',
                                alignItems: 'flex-end',
                                
                            }}>
                                <Box sx={{
                                    marginTop: {xs:'200px', sm:'150px', md:'150px', lg:'150px',},
                                    padding: '0px 0px 20px 20px',
                                }}>
                                    <Box>
                                        <Typography>
                                            Wallet vs. App Bancaria:
                                        </Typography>
                                        <Typography>
                                            ¿Cuál es la diferencia?
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{
                                marginTop: '25px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Link href={'/'}>
                                    <Typography sx={{
                                        border: '2px solid #FFC72C',
                                        borderRadius: '50px',
                                        width: '150px',
                                        textAlign: 'center',
                                        padding: '10px 0px',
                                        color: 'black'
                                    }}>
                                        Leer más
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                marginTop: {xs: '50px', sm: '100px', md: '100px', lg: '100px',},
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
                                    
                                    borderColor: '#524092',
                                    
                                },
                            },
                            //estilos para el input cuando esta en focus entra y sale el cursor del campo
                            " .Mui-focused": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                        
                                        borderColor: '#524092',
                                        
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
                            color: 'white',
                            
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
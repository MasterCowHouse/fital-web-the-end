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
                        src="../img/diferencia-wallet-app-bancaria.png"
                        alt="¿Qué es el blockchain?"
                        sx={{
                            width: {xs: '100%', sm: '90%', md: '90%', lg: '70%',},
                        }}
                    />
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: '40px',
                        color: '#524092',
                    }}>
                        Wallet vs. App Bancaria: 
                        <br />
                        ¿Cuál es la diferencia?
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
                        
                        En la era digital, gestionar nuestro dinero nunca ha sido tan fácil. Pero con tantas
                        <br /> 
                        opciones disponibles, a veces es difícil entender qué herramienta necesitamos y para qué.
                        <br /> 
                        Seguramente has oído hablar de wallets digitales y apps bancarias, 
                        <br />
                        pero ¿en qué se diferencian? ¿Son lo mismo o tienen funciones completamente distintas?
                        <br />
                        <br />
                        Spoiler: aunque ambas sirven para gestionar tu dinero, su propósito y tecnología son bastante diferentes. 
                        <br />
                        En este blog, te explicaremos de forma sencilla las diferencias entre una wallet y una app bancaria, 
                        <br />
                        y cómo elegir la opción que mejor se adapte a tus necesidades.
                        <br />
                        <br />
                        <span style={{color: '#524092', fontWeight: 900, fontSize: '20px'}}>¿Qué es una Wallet?</span>
                        <br />
                        <br />
                        Una wallet (o billetera digital) es una herramienta tecnológica diseñada para 
                        <br />
                        almacenar y gestionar tus activos digitales, como criptomonedas, tokens,
                        <br /> 
                        o incluso documentos digitales. Las wallets funcionan como una cartera física, 
                        <br />
                        pero en lugar de guardar billetes y monedas, guardan claves privadas 
                        <br />
                        que te permiten acceder a tus activos en blockchain.
                        <br />
                        <br />
                        <span style={{color: '#524092', fontWeight: 900, fontSize: '20px'}}>
                            <Image 
                                src='/img/diferencia-wallet-app-bancaria-2.png'
                                alt=""
                                width={700}
                                height={700}
                            />
                        </span> 
                        <br />
                        <br />
                        <span style={{color: '#524092', fontWeight: 900, fontSize: '20px'}}>Tipos de Wallets</span>
                        <br />
                        <br />
                        Hot Wallet: Conexión a Internet. Son convenientes para transacciones rápidas, 
                        <br />
                        pero más vulnerables a ataques.
                        <br />
                        Cold Wallet: Fuera de línea. Son más seguras, pero menos prácticas para transacciones frecuentes. 
                        <br />
                        <br />
                        <span style={{color: '#524092', fontWeight: 900, fontSize: '20px'}}>Funciones Principales de una Wallet</span>
                        <br />
                        <br />
                        &bull;Almacenar criptomonedas como Bitcoin o Ethereum.
                        <br />
                        &bull;Enviar y recibir activos digitales.
                        <br />
                        &bull;Acceso a aplicaciones descentralizadas (dApps) en la Web 3.
                        <br />
                        &bull;Control total sobre tus claves privadas (tú eres el banco).
                        <br />
                        <br />
                        <span style={{color: '#524092', fontWeight: 900, fontSize: '20px'}}>¿Qué es una App Bancaria?</span>
                        <br />
                        <br />
                        Una app bancaria, por otro lado, es una aplicación ofrecida por instituciones 
                        <br />
                        financieras tradicionales (bancos) para gestionar tus cuentas bancarias. 
                        <br />
                        Estas apps están diseñadas para facilitar la administración de tu dinero, 
                        <br />
                        permitiéndote realizar transacciones, consultar tu saldo y pagar servicios desde tu dispositivo móvil.
                        <br />
                        <br />
                        Funciones Principales de una App Bancaria:
                        <br />
                        <br />
                        Consultar saldos y movimientos bancarios.
                        <br />
                        Transferir dinero entre cuentas o a terceros.
                        <br />
                        Pagar facturas y servicios (electricidad, agua, internet, etc.).
                        <br />
                        Solicitar créditos o préstamos directamente desde la app.
                        <br />
                        Vincular cuentas de ahorro, tarjetas de crédito y débito.
                        <br />
                        <br />
                        <span style={{color: '#524092', fontWeight: 900, fontSize: '20px'}}>
                            <Image 
                                src='/img/diferencia-wallet-app-bancaria-3.png'
                                alt=""
                                width={700}
                                height={700}
                            />
                        </span> 
                        <br />
                        <br />
                        Principales Diferencias entre una Wallet y una App Bancaria
                        <br />
                        Aunque ambas herramientas están diseñadas para gestionar dinero, 
                        <br />
                        su funcionamiento y objetivos son completamente diferentes. 
                        <br />
                        Aquí tienes una tabla que resume las diferencias clave:
                        <br />
                        <br />
                        <span style={{color: '#524092', fontWeight: 900, fontSize: '20px'}}>
                            <Image 
                                src='/img/diferencia-wallet-app-bancaria-4.png'
                                alt=""
                                width={700}
                                height={700}
                            />    
                        </span> 
                        <br />
                        <br />
                        <span style={{color: '#524092', fontWeight: 900}}>¿Cuál Deberías Usar?</span> 
                        <br />
                        <br />
                        La respuesta depende de tus necesidades y objetivos financieros:
                        <br />
                        <br />
                        Usa una Wallet si:
                        <br />
                        <br />
                        &bull;Inviertes en criptomonedas o tokens digitales.
                        <br />
                        &bull;Deseas tener control total sobre tus activos, sin intermediarios.
                        <br />
                        &bull;Te interesa explorar la Web 3, DeFi, o participar en proyectos de blockchain.
                        <br />
                        <br />
                        Usa una App Bancaria si:
                        <br />
                        <br />
                        &bull;Necesitas administrar tu dinero fiat (como dólares o pesos).
                        <br />
                        &bull;Realizas pagos frecuentes de servicios o transferencias bancarias.
                        <br />
                        &bull;Buscas una solución financiera tradicional con el respaldo de un banco.
                        <br />
                        <br />
                        Por suerte Fital tiene ambas funciones dentro de su wallet, puedes tener tu dinero 
                        <br />
                        en pesos mxn, gestionar, vender o comprar cryptomonedas y tokens o ntfs.
                        <br />
                        ¡Puedes convertir tus crypto en pesos mexicanos y comprar tokens inmobiliarios 
                        <br />
                        dentro de la wallet también!
                        <br />
                        <br />
                        <Link href={'/PageContacto'} style={{
                            textDecorationLine: 'underline'
                        }}>
                            {/* <Typography sx={{
                                textDecorationLine: 'underline'
                            }}> */}
                                Conoce más de nuestra wallet aquí.(link a pagina de wallet dentro del sitio web)
                                {/* (agregar link a página “compra de tokens de la web de fital”) */}
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
                                            La primera cryptomoneda 
                                            <br />
                                            respaldada por inmuebles en México
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
                                            ¿Qué es el blockchain?
                                        </Typography>
                                        <Typography>
                                            ¿Qué ventajas tiene adentrarse 
                                            <br />
                                            al mundo del blockchain?
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
                                            ¿Qué es la Tokenización
                                            <br />
                                            Inmobiliaria?
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
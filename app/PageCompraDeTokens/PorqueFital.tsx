import { Box, Typography } from "@mui/material";









// interface CustomSiete {
//     id: number;
//     icono: string;
//     textUno: JSX.Element;
//     paloma: string;
//     tache: string;
//     textTres: string;
//     textCuatro: string;
//     textNueve: JSX.Element;
// }

// const customSiete: CustomSiete[] = [
//     {
//         id: 1,
//         icono: '../img/iconoSiete.svg',
//         textUno: <span>Bonos</span>,
//         paloma: '../img/paloma.svg',
//         tache: '../img/tache.svg',
//         textTres: 'Baja',
//         textCuatro: 'Bajo',
//         textNueve: <span>10 - 12%</span>,
//     }
// ]

// interface CustomOcho {
//     id: number;
//     icono: string;
//     textUno: JSX.Element;
//     paloma: string;
//     tache: string;
//     textTres: string;
//     textCuatro: string;
//     textNueve: JSX.Element;
// }

// const customOcho: CustomOcho[] = [
//     {
//         id: 1,
//         icono: '../img/iconoOcho.svg',
//         textUno: <span>Cuentas <br />remuneradas</span>,
//         paloma: '../img/paloma.svg',
//         tache: '../img/tache.svg',
//         textTres: 'Baja',
//         textCuatro: 'Bajo',
//         textNueve: <span>2 - 6%</span>,
//     }
// ]

const PorqueFital = () => {
    return (
        <Box>
            {/* <Box className='overflow-x-auto' sx={{
                border: '5px solid red',
                width: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                
            }}>
                <Box sx={{
                    border: '5px solid red',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#524092',
                    bgcolor: 'white',
                    padding: '50px 50px', 
                    borderRadius: '50px'
                }}>
                    {customUno.map(({icono, textUno, textDos, textTres, textCuatro, textCinco, textSeis, textSiete, textOcho, textNueve}, id) => (
                        <Box key={id}>
                            <Image 
                                src={icono}
                                alt="FITAL"
                                width={100}
                                height={100}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: '#FFC72C',
                                    padding: '20px',
                                    borderRadius: '100%',
                                    
                                }}
                            />
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderRight: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C',
                                    
                                }}>
                                    {textUno}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C'
                                }}>
                                    {textDos}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C'
                                }}>
                                    {textTres}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C'
                                }}>
                                    {textCuatro}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C'
                                }}>
                                    {textCinco}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C'
                                }}>
                                    {textSeis}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C'
                                }}>
                                    {textSiete}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C'
                                }}>
                                    {textOcho}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    
                                }}>
                                    {textNueve}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                    {customDos.map(({icono, textUno, paloma, textTres, textCuatro, textNueve}, id) => (
                        <Box key={id} sx={{
                            bgcolor: '#FFE9AB'
                        }}>
                            <Image 
                                src={icono}
                                alt="FITAL"
                                width={100}
                                height={100}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: 'white',
                                    padding: '20px',
                                    borderRadius: '100%',
                                }}
                            />
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderLeft: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C'
                                }}>
                                    {textUno}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    {textTres}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    {textCuatro}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    {textNueve}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                    {customTres.map(({icono, textUno, paloma, tache, textTres, textCuatro, textNueve}, id) => (
                        <Box key={id}>
                            <Image 
                                src={icono}
                                alt="FITAL"
                                width={100}
                                height={100}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: '#FFC72C',
                                    padding: '20px',
                                    borderRadius: '100%',
                                }}
                            />
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderRight: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    {textUno}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    {textTres}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    {textCuatro}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    {textNueve}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                    {customCuatro.map(({icono, textUno, paloma, tache, textTres, textCuatro, textNueve}, id) => (
                        <Box key={id}>
                            <Image 
                                src={icono}
                                alt="FITAL"
                                width={100}
                                height={100}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: '#FFC72C',
                                    padding: '20px',
                                    borderRadius: '100%',
                                }}
                            />
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderRight: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    {textUno}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    {textTres}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    {textCuatro}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    {textNueve}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                    {customCinco.map(({icono, textUno, paloma, tache, textTres, textCuatro, textNueve}, id) => (
                        <Box key={id}>
                            <Image 
                                src={icono}
                                alt="FITAL"
                                width={100}
                                height={100}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: '#FFC72C',
                                    padding: '20px',
                                    borderRadius: '100%',
                                }}
                            />
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderRight: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    {textUno}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    {textTres}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    {textCuatro}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    {textNueve}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                    {customSeis.map(({icono, textUno, paloma, tache, textTres, textCuatro, textNueve}, id) => (
                        <Box key={id}>
                            <Image 
                                src={icono}
                                alt="FITAL"
                                width={100}
                                height={100}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: '#FFC72C',
                                    padding: '20px',
                                    borderRadius: '100%',
                                }}
                            />
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderRight: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    {textUno}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    {textTres}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    {textCuatro}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    {textNueve}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                    {customSiete.map(({icono, textUno, paloma, tache, textTres, textCuatro, textNueve}, id) => (
                        <Box key={id}>
                            <Image 
                                src={icono}
                                alt="FITAL"
                                width={100}
                                height={100}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: '#FFC72C',
                                    padding: '20px',
                                    borderRadius: '100%',
                                }}
                            />
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderRight: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    {textUno}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={paloma}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    {textTres}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    {textCuatro}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    border: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderRight: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    {textNueve}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                    {customOcho.map(({icono, textUno, paloma, tache, textTres, textCuatro, textNueve}, id) => (
                        <Box key={id}>
                            <Image 
                                src={icono}
                                alt="FITAL"
                                width={100}
                                height={100}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: '#FFC72C',
                                    padding: '20px',
                                    borderRadius: '100%',
                                }}
                            />
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderBottom: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    {textUno}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    // border: '1px solid red'
                                    borderTop: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    borderTop: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    {textTres}
                                </Typography>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    borderTop: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    {textCuatro}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    borderTop: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    borderTop: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    borderTop: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '50px',
                                    borderTop: '2px solid #FFC72C',
                                    borderBottom: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                }}>
                                    <Image 
                                        src={tache}
                                        alt="FITAL"
                                        width={50}
                                        height={50}
                                        style={{
                                            backgroundColor: '#524092',
                                            borderRadius: '100%',
                                            padding: '10px',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    width: '100px',
                                    height: '50px',
                                    borderTop: '2px solid #FFC72C',
                                    borderLeft: '2px solid #FFC72C',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {textNueve}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box> */}
            <Box>
                <Typography sx={{
                    fontSize: '50px',
                    color: '#FFC72C',
                    fontWeight: 900,
                    textAlign: 'center'
                }}>
                    ¿Por qué FITAL?
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box className='overflow-y-auto' sx={{
                    border: {xs: '5px solid black', sm: '5px solid pink', md: '5px solid green', lg: '5px solid red',},
                    width: {xs: '500px', sm: '550px', md: '850px', lg: 'auto',},
                    // display: {xs: 'block', sm: 'block', md: 'block', lg: 'flex',},
                    // alignItems: {xs: 'normal', sm: 'normal', md: 'normal', lg: 'center',},
                    // justifyContent: {xs: 'normal', sm: 'normal', md: 'normal', lg: 'center',}, 
                    
                }}>
                    <table className="table-fixed border-separate border-spacing-2 border border-slate-500">
                        <thead>
                            <tr>
                                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                                    <Box sx={{
                                        // border: '1px solid red',
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoUno.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'

                                            }}
                                        />
                                    </Box>
                                    Comparativa
                                </th>
                                <th className="border border-slate-600 p-10 bg-[#FFFFFF] text-[#524092]">
                                    <Box sx={{
                                        // border: '1px solid red',
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoDos.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'      
                                            }}
                                        />
                                    </Box>
                                    FITAL
                                </th>
                                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                                    <Box sx={{
                                        // border: '1px solid red',
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoTres.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'
                                            }}
                                        />
                                    </Box>
                                    Inmobiliario
                                </th>
                                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                                    <Box sx={{
                                        // border: '1px solid red',
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoCuatro.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'
                                            }}
                                        />
                                    </Box>
                                    Acciones
                                </th>
                                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                                    <Box sx={{
                                        // border: '1px solid red',
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoCinco.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'
                                            }}
                                        />
                                    </Box>
                                    Activos
                                <br />digitales</th>
                                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                                    <Box sx={{
                                        // border: '1px solid red',
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoSeis.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'
                                            }}
                                        />
                                    </Box>
                                    Oro
                                </th>
                                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                                    <Box sx={{
                                        // border: '1px solid red',
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoSiete.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'
                                            }}
                                        />
                                    </Box>
                                    Bonos
                                </th>
                                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                                    <Box sx={{
                                        // border: '1px solid red',
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoOcho.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'
                                            }}
                                        />
                                    </Box>
                                    Cuentas <br />remuneradas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">
                                    Rendimiento <br />atractivo
                                </td>
                                {/* <td className="border border-slate-600 p-5 flex items-center justify-center"> */}
                                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">Volatilidad</td>
                                <td className="border border-slate-600 p-5 text-center bg-[#FFFFFF] text-[#524092]">Baja</td>
                                <td className="border border-slate-600 p-5 text-center">Baja</td>
                                <td className="border border-slate-600 p-5 text-center">Alta</td>
                                <td className="border border-slate-600 p-5 text-center">Extrema</td>
                                <td className="border border-slate-600 p-5 text-center">Baja</td>
                                <td className="border border-slate-600 p-5 text-center">Baja</td>
                                <td className="border border-slate-600 p-5 text-center">Baja</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">Nivel de <br />riesgo</td>
                                <td className="border border-slate-600 p-5 text-center bg-[#FFFFFF] text-[#524092]">Bajo</td>
                                <td className="border border-slate-600 p-5 text-center">Bajo</td>
                                <td className="border border-slate-600 p-5 text-center">Alto</td>
                                <td className="border border-slate-600 p-5 text-center">Extremo</td>
                                <td className="border border-slate-600 p-5 text-center">Bajo</td>
                                <td className="border border-slate-600 p-5 text-center">Bajo</td>
                                <td className="border border-slate-600 p-5 text-center">Bajo</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">Accesibilidad</td>
                                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'tache',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>                            
                            </tr>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">Liquidez <br />24/7</td>
                                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">Activo <br />tangible</td>
                                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">Cobertura de <br />la inflación</td>
                                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">Rentabilidad <br />anual</td>
                                <td className="border border-slate-600 p-5 text-center bg-[#FFFFFF] text-[#524092]">13 - 30%</td>
                                <td className="border border-slate-600 p-5 text-center">7 - 14%</td>
                                <td className="border border-slate-600 p-5 text-center">10 - 20%</td>
                                <td className="border border-slate-600 p-5 text-center">Altamente <br />variable</td>
                                <td className="border border-slate-600 p-5 text-center">8 - 12%</td>
                                <td className="border border-slate-600 p-5 text-center">10 - 12%</td>
                                <td className="border border-slate-600 p-5 text-center">2 - 6%</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </Box>        



        </Box>
    )
}

export default PorqueFital
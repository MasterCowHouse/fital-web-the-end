import { Box, Typography, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import corazon from "@/public/img/corazon.svg";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

interface CustomLinks {
  id: number;
  ruta: string;
  links: string;
}

const customLinks: CustomLinks[] = [
  {
    id: 1,
    ruta: "/",
    links: "Septimbre 2023",
  },
  {
    id: 1,
    ruta: "/",
    links: "Octubre 2023",
  },
  {
    id: 1,
    ruta: "/",
    links: "Noviembre 2023",
  },
];

const Articulo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: { xs: "center", sm: "start", md: "start", lg: "start" },
        justifyContent: "center",
        flexDirection: {
          xs: "column-reverse",
          sm: "row",
          md: "row",
          lg: "row",
        },
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          marginTop: "100px",
          marginBottom: "100px",
          width: { xs: "90%", sm: "60%", md: "70%", lg: "70%" },
        }}
      >
        <Box>
          <Box
            component={"img"}
            src="../img/claves-invertir-bienes-raices-criptomonedas.png"
            alt="¿Qué es el blockchain?"
            sx={{
              width: { xs: "100%", sm: "90%", md: "90%", lg: "70%" },
            }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "40px",
              color: "#524092",
            }}
          >
            Claves para Invertir en Bienes Raíces
            <br />
            con Criptomonedas
          </Typography>
          <Typography
            sx={{
              color: "#FFC72C",
            }}
          >
            16 de Octubre 2023
          </Typography>
          <Box
            sx={{
              display: "flex",
              borderTop: "1px solid grey",
              width: "200px",
            }}
          >
            <Typography
              sx={{
                color: "#524092",
              }}
            >
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
        <Box
          sx={{
            marginTop: "50px",
          }}
        >
          <Typography
            sx={{
              color: "black",
            }}
          >
            ¿Te imaginas comprar un departamento con criptomonedas? o
            <br />
            ¿El 50% de un airbnb que te generará ganancias mensuales?
            <br />
            <br />
            Pues déjame decirte algo: esto ya no es el futuro, es el presente.
            <br />
            <span style={{ color: "#524092", fontWeight: 900 }}>
              Comprar bienes raíces con criptomonedas{" "}
            </span>
            es una realidad y
            <br />
            está revolucionando la manera en que pensamos sobre el mercado
            inmobiliario. Antes de lanzarte a enviar
            <br />
            todas tus bitcoin o USDT, necesitas conocer algunas claves para
            hacerlo de manera segura y efectiva.
            <br />
            <br />
            En este blog te explicaremos cómo dar el salto al mundo inmobiliario
            con criptomonedas.
            <br />
            <br />
            Lo primero es lo primero:{" "}
            <span style={{ color: "#524092", fontWeight: 900 }}>
              ¿por qué usar criptomonedas en lugar de dinero tradicional?
            </span>
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              <Image
                src="/img/claves-invertir-bienes-raices-criptomonedas-2.png"
                alt=""
                width={700}
                height={700}
              />
            </span>
            <br />
            <br />
            Bueno, porque la vieja manera de comprar inmuebles está llena de
            complicaciones. Con las criptomonedas,
            <br />
            todo es más simple. Aquí tienes algunas razones que hacen de esta
            combinación un “match” perfecto:
            <br />
            <br />
            <span style={{ color: "#524092" }}>
              1. Velocidad de Transacciones:
            </span>{" "}
            Blockchain hace que las transacciones sean casi instantáneas.
            <br />
            Nada de meses de espera ni papeleo eterno.
            <br />
            <span style={{ color: "#524092" }}>2. Acceso Global:</span>¿Quieres
            comprar un departamento en Nueva York o un terreno en Bali? Con
            criptomonedas,
            <br />
            olvídate de las barreras de divisas o complicaciones legales
            internacionales.
            <br />
            <span style={{ color: "#524092" }}>
              3. Transparencia y Seguridad:
            </span>
            Cada transacción se registra en blockchain, haciéndola inmutable y
            libre de fraudes.
            <br />
            Es como tener un candado digital irrompible.
            <br />
            <span style={{ color: "#524092" }}>4. Diversificación:</span>Si ya
            tienes criptos como Bitcoin o USDT, comprar tokens inmobiliarios te
            permite combinar
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              Clave 1: Entiende lo Básico
            </span>
            <br />
            <br />
            <span style={{ color: "#524092" }}>Wallets Digitales:</span>Es el
            lugar donde guardarás tus criptomonedas. Piensa en esto como tu
            billetera digital.
            <br />
            En FITAL, tienes tu propia wallet integrada para enviar tus criptos
            fácilmente y hacer el intercambio a pesos mxn.
            <br />
            <span style={{ color: "#524092" }}>
              <Link
                href={"/Que-es-el-blockchain"}
                style={{ textDecorationLine: "underline" }}
              >
                Blockchain:
              </Link>
            </span>
            Es la tecnología que asegura que todo sea transparente y seguro.
            <br />
            Cada transacción queda grabada de forma inmutable.
            <br />
            <span style={{ color: "#524092" }}>Volatilidad:</span> Recuerda que
            el valor de tus criptos puede subir o bajar, así que planifica tu
            compra teniendo esto en mente.
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              <Image
                src="/img/claves-invertir-bienes-raices-criptomonedas-3.png"
                alt=""
                width={700}
                height={700}
              />
            </span>
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              Clave 2: Encuentra una Plataforma Confiable
            </span>
            <br />
            <br />
            Aquí no hay espacio para improvisaciones. Necesitas una plataforma
            que te ofrezca
            <br />
            respaldo y seguridad.{" "}
            <span style={{ color: "#524092", fontWeight: 900 }}>FITAL</span> es
            un excelente ejemplo:
            <br />
            <br />
            <span style={{ color: "#524092", fontWeight: 900 }}>
              &bull;Tokens Respaldados por Fideicomisos Digitales:
            </span>{" "}
            Cada token inmobiliario que compras con FITAL <br />
            está respaldado por un fideicomiso digital, lo que significa que tu
            compra está protegida y vinculada a una propiedad real.
            <br />
            <span style={{ color: "#524092", fontWeight: 900 }}>
              &bull;Marketplace Personalizado (PTI):
            </span>{" "}
            FITAL te permite explorar diferentes proyectos inmobiliarios
            <br />
            desde su{" "}
            <span style={{ color: "#524092", fontWeight: 900 }}>
              Plataforma de Tokenización Personalizada
            </span>
            , donde encontrarás todas las opciones disponibles y
            <br />
            la información que necesitas conocer.
            <br />
            {/* <span style={{color: '#524092', fontWeight: 900}}>&bull;Opciones de Pago Versátiles:</span> Aceptan Bitcoin, USDT y <span style={{color: '#524092', fontWeight: 900}}>FitalCoin</span> (link a blog: FitalCoin: La primera cryptomoneda respaldada por inmuebles en México) (su criptomoneda propia), lo que hace todo mucho más fácil.

                        cómo funciona con Fital y por qué está marcando un antes y un después en el mundo de las inversiones inmobiliarias.  */}
            <span style={{ color: "#524092", fontWeight: 900 }}>
              &bull;Opciones de Pago Versátiles:
            </span>{" "}
            Aceptan Bitcoin, USDT y{" "}
            <span style={{ color: "#524092", fontWeight: 900 }}>FitalCoin</span>
            , lo que hace todo mucho más fácil.
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              Clave 3: La Magia de la Tokenización
            </span>
            <br />
            <br />
            La{" "}
            <span style={{ color: "#524092", fontWeight: 900 }}>
              tokenización inmobiliaria
            </span>{" "}
            está cambiando las reglas del juego. Básicamente,
            <br />
            convierte una propiedad en tokens digitales que puedes comprar según
            tu presupuesto.
            <br />
            Es como si compraras acciones, pero de un inmueble real.
            <br />
            <br />
            &bull;Puedes empezar con poco dinero y comprar solo una fracción del
            inmueble.
            <br />
            &bull;Es mucho más fácil vender tus tokens si necesitas liquidez.
            <br />
            &bull;Ganas ingresos pasivos (como renta) de manera proporcional a
            los tokens que posees.
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              Clave 4: Cómo Funciona el Proceso en FITAL
            </span>
            <br />
            <br />
            ¿Listo para dar el paso? Aquí tienes el proceso paso a paso de cómo
            invertir en bienes raíces
            <br />
            con criptomonedas en{" "}
            <span style={{ color: "#524092", fontWeight: 900 }}>FITAL:</span>
            <br />
            <br />
            <span style={{ color: "#524092", fontWeight: 900 }}>
              1. Explora la Plataforma:{" "}
            </span>
            Accede al marketplace de tokenización (PTI) de cada proyecto con
            FITAL.
            <br />
            Encuentra propiedades tokenizadas que se ajusten a tus metas de
            inversión.
            <br />
            <span style={{ color: "#524092", fontWeight: 900 }}>
              2. Elige tu Token:{" "}
            </span>
            Decide cuántos tokens quieres comprar y revisa la información en
            cada PTI.
            <br />
            <span style={{ color: "#524092", fontWeight: 900 }}>
              3. Envía tus Criptos:{" "}
            </span>
            Usa Bitcoin, USDT o FitalCoin para financiar tu wallet en FITAL.
            <br />
            El sistema convierte tus criptos en pesos mexicanos automáticamente
            para completar la transacción.
            <br />
            <span style={{ color: "#524092", fontWeight: 900 }}>
              4. Recibe tus Tokens:{" "}
            </span>
            Una vez realizada la compra, los tokens inmobiliarios se almacenarán
            en tu wallet de Fital.
            <br />
            <span style={{ color: "#524092", fontWeight: 900 }}>
              5. Disfruta de los Beneficios:
            </span>{" "}
            Obtén ingresos proporcionales por alquiler o revalorización de la
            propiedad.
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              <Image
                src="/img/claves-invertir-bienes-raices-criptomonedas-4.png"
                alt=""
                width={700}
                height={700}
              />
            </span>
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              Clave 5: Diversifica
            </span>
            <br />
            <br />
            Como en cualquier inversión, la diversificación es clave. Usa tus
            criptomonedas para
            <br />
            adquirir tokens de diferentes propiedades, ubicaciones o tipos de
            inmuebles.
            <br />
            Por ejemplo, compra un token en un edificio comercial y en un
            departamento residencial
            <br />
            para equilibrar riesgos y beneficios.
            <br />
            <br />
            Comprar bienes raíces con criptomonedas no solo es emocionante,
            <br />
            sino también una estrategia inteligente para diversificar tu
            portafolio.
            <br />
            Gracias a plataformas como{" "}
            <span style={{ color: "#524092", fontWeight: 900 }}>FITAL</span>,
            puedes hacerlo de manera sencilla, segura y
            <br />
            respaldada por fideicomisos digitales.
            <br />
            <br />
            ¿Qué esperas? Con FITAL, el futuro de las inversiones inmobiliarias
            está a tu alcance.
            <br />
            Explora su marketplace, usa Bitcoin, USDT o FitalCoin y comienza a
            construir
            <br />
            tu portafolio con tokens inmobiliarios.
            <br />
            <br />
            <Link
              href={"/PageContacto"}
              style={{
                textDecorationLine: "underline",
              }}
            >
              {/* <Typography sx={{
                                textDecorationLine: 'underline'
                            }}> */}
              ¡Compra Tokens Ahora con un solo click!
              {/* (agregar link a página “compra de tokens de la web de fital”) */}
              {/* </Typography> */}
            </Link>
          </Typography>
        </Box>
        <Box>
          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "40px",
                pt: 10,
              }}
            >
              También podría interesarte:
            </Typography>
          </Box>
          <hr />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "center",
                sm: "normal",
                md: "normal",
                lg: "normal",
              },
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                // padding: {xs:'25px', sm:'100px', md:'100px', lg:'100px',},
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundImage: "url(../img/bgUno.jpg)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
                  height: {
                    xs: "350px",
                    sm: "300px",
                    md: "300px",
                    lg: "300px",
                  },
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    marginTop: {
                      xs: "200px",
                      sm: "150px",
                      md: "150px",
                      lg: "150px",
                    },
                    padding: "0px 0px 20px 20px",
                  }}
                >
                  <Box>
                    <Typography>FitalCoin:</Typography>
                    <Typography>
                      La primera cryptomoneda
                      <br />
                      respaldada por inmuebles en México
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href={"/PageBlogArticulo"}>
                  <Typography
                    sx={{
                      border: "2px solid #FFC72C",
                      borderRadius: "50px",
                      width: "150px",
                      textAlign: "center",
                      padding: "10px 0px",
                      color: "black",
                    }}
                  >
                    Leer más
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                // padding: {xs:'25px', sm:'100px', md:'100px', lg:'100px',},
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundImage: "url(../img/Que-es-el-blockchain.png)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
                  height: {
                    xs: "350px",
                    sm: "300px",
                    md: "300px",
                    lg: "300px",
                  },
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    marginTop: {
                      xs: "200px",
                      sm: "150px",
                      md: "150px",
                      lg: "150px",
                    },
                    padding: "0px 0px 20px 20px",
                  }}
                >
                  <Box>
                    <Typography>¿Qué es el blockchain?</Typography>
                    <Typography>
                      ¿Qué ventajas tiene adentrarse al mundo del blockchain?
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href={"/Que-es-el-blockchain"}>
                  <Typography
                    sx={{
                      border: "2px solid #FFC72C",
                      borderRadius: "50px",
                      width: "150px",
                      textAlign: "center",
                      padding: "10px 0px",
                      color: "black",
                    }}
                  >
                    Leer más
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                // padding: {xs:'25px', sm:'100px', md:'100px', lg:'100px',},
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundImage:
                    "url(../img/que-es-la-tokenizacion-inmobiliaria-3.png)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
                  height: {
                    xs: "350px",
                    sm: "300px",
                    md: "300px",
                    lg: "300px",
                  },
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    marginTop: {
                      xs: "200px",
                      sm: "150px",
                      md: "150px",
                      lg: "150px",
                    },
                    padding: "0px 0px 20px 20px",
                  }}
                >
                  <Box>
                    <Typography>
                      ¿Qué es la Tokenización
                      <br />
                      Inmobiliaria?
                    </Typography>
                    <Typography>Guía Completa para Principiantes</Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href={"/que-es-la-tokenizacion-inmobiliaria"}>
                  <Typography
                    sx={{
                      border: "2px solid #FFC72C",
                      borderRadius: "50px",
                      width: "150px",
                      textAlign: "center",
                      padding: "10px 0px",
                      color: "black",
                    }}
                  >
                    Leer más
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: { xs: "50px", sm: "100px", md: "100px", lg: "100px" },
          width: { xs: "90%", sm: "35%", md: "25%", lg: "25%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            placeholder="Buscar post"
            variant="outlined"
            required={true}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "2px solid #524092",
                borderRadius: "50px",
              },
              //estilos para el hover del input
              "&:hover:not(.Mui-focused)": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#524092",
                },
              },
              //estilos para el input cuando esta en focus entra y sale el cursor del campo
              " .Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#524092",
                },
              },
            }}
          />
          <Box
            sx={{
              backgroundColor: "#524092",
              borderRadius: "100px",
              width: "55px",
              height: "55px",
              marginLeft: "-50px",
            }}
          >
            <IconButton
              type="button"
              sx={{
                p: "15px",
                color: "white",
              }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "50px",
          }}
        >
          <Typography
            sx={{
              color: "#524092",
              fontSize: "25px",
              borderBottom: "2px solid #FFC72C",
            }}
          >
            Más Post
          </Typography>
        </Box>
        {customLinks.map(({ ruta, links }, id) => (
          <Box key={id}>
            <Link
              href={ruta}
              style={{
                color: "#606060",
                textDecoration: "underline",
              }}
            >
              {links}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Articulo;

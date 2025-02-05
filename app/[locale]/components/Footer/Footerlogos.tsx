"use client";
import { Box, Button, Fade, Modal, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { useTranslations } from "next-intl";
interface CustomLogosFooter {
  id: number;
  logosFooter: string;
  linksImgs: string;
}

const customLogosFooter: CustomLogosFooter[] = [
  {
    id: 1,
    logosFooter: "../img/CNBV.svg",
    linksImgs:
      "https://www.gob.mx/cms/uploads/attachment/file/926341/TABLERO-DE-CONTROL-SOFOMES-ENR_05072024.pdf",
  },
  {
    id: 2,
    logosFooter: "../img/REDECO.svg",
    linksImgs: "",
  },
  {
    id: 3,
    logosFooter: "../img/REUNE.svg",
    linksImgs:
      "https://eduweb.condusef.gob.mx/Reune/consulta.aspx?69,Finganas%2c+S.A.P.I.+de+C.V.%2c+SOFOM%2c+E.N.R.,,9,,",
  },
  {
    id: 4,
    logosFooter: "../img/SHCP.svg",
    linksImgs: "",
  },
  // {
  //     id: 5,
  //     logosFooter: '../img/CONDUSEF.svg',
  //     linksImgs: 'https://webapps.condusef.gob.mx/SIPRES/jsp/home_publico.jsp?idins=15772',
  // },
];

const Footerlogos = () => {
  const [openTerms, setOpenTerms] = useState<boolean | null>(null);
  const [openPrivacy, setOpenPrivacy] = useState<boolean | null>(null);

  const t = useTranslations("Footer");

  return (
    <Box
      sx={{
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, sm: 5, md: 10, lg: 10 },
          padding: {
            xs: "0px",
            sm: "50px 0px",
            md: "50px 0px",
            lg: "50px 0px",
          },
          flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
        }}
      >
        <Link component={"button"} onClick={() => setOpenTerms(true)}>
          <Typography>{t.raw("legal.options")[0]}</Typography>
        </Link>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openTerms!}
          onClose={() => setOpenTerms(false)}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={openTerms!}>
            <Box sx={style}>
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  color: "#999696",
                  p: 4,
                  marginBottom: 10,
                }}
              >
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "justify",
                    mb: 3,
                  }}
                >
                  POLÍTICA Y AVISO DE PRIVACIDAD. <br />
                  Reconoce que nos han proporcionado los datos de contacto, como
                  datos personales, nuestro compromiso es óptimo para tratar
                  estos datos para los fines de promoción o publicidad, para
                  propios y terceros que pueden ser de interés, en nuestra
                  plataforma o sitio web tanto como ofrecer promociones
                  comerciales de bienes o servicios o cualquier otra
                  información, manifestando su consentimiento al aceptar el
                  mismo. DATOS PERSONALES SENSIBLES.
                  <br />
                  Nuestro aviso de privacidad FINGANAS S.A.P.I DE CV SOFOM ENR
                  denominado por el (responsable) será encargado de llevar los
                  ciertos datos personales que serán proporcionados a través de
                  usted denominado el (Titular), para efectos del presente aviso
                  señala. Datos Personales que están sometidos a resguardo. Los
                  datos proporcionados por parte del el Titular y revisión de
                  los mismos en el sitio web son: Datos de identificación
                  (Nombre (s), Apellido (s), Correo Electrónico y Número
                  Telefónico, RFC). El Titular no deberá añadir, otorgar otros
                  datos no requeridos o diferentes a los ya solicitados por el
                  responsable. FINGANAS S.A.P.I DE CV SOFOM ENR informa que los
                  datos personales quedan bajo resguardo y se compromete a
                  manejarlos con confidencialidad, seguridad, mientras tanto en
                  ningún momento se solicitaran datos personales sensibles o de
                  carácter intimo condenando la utilización indebida que pueda
                  dar origen a discriminación por su origen racial, étnico,
                  creencia religiosa, preferencia sexual entre otras.
                  <br />
                  USO DE LOS DATOS REMOTOS. <br />
                  Al visitar nuestro sitio web, así como los sitios,
                  aplicaciones y herramientas relacionadas con los servicios,
                  FINGANAS S.A.P.I DE CV SOFOM ENR podrá recabar información que
                  nos haya sido enviada por su dispositivo de acceso, ya sea
                  computadora, teléfono móvil u otros conocidos o por conocerse,
                  entre la que se encuentra: datos sobre las páginas a las que
                  obtiene acceso, la dirección IP y/o identificadores de su
                  dispositivo, sistema operativo en uso, ubicación, la
                  información de la red móvil, los datos de registro web
                  estándar, navegador que está utilizando y el tráfico hacia y
                  desde nuestro sitio e información adicional, como su uso e
                  interacción con nuestro sitio web en relación con los
                  servicios. Cuando hace uso de los servicios, FINGANAS S.A.P.I
                  DE CV SOFOM ENR recopila información acerca de las
                  interacciones que consulta a través del sitio web, En caso de
                  requerimiento, puede ponerlas a disposición de las autoridades
                  competentes en México y de aquellas con competencia en virtud
                  de los Tratados Internacionales de los que México sea parte.
                  Así mismo, al acceder a nuestro sitio web o utilizar los
                  servicios, FITAL MX podrá colocar archivos de datos
                  codificados (cookies, etiquetas de píxel, 'Flash cookies' u
                  otros medios de almacenamiento local proporcionados por el
                  navegador o las aplicaciones asociadas, denominados
                  'cookies'). El uso de estas tecnologías por FITAL MX tiene
                  como finalidad su reconocimiento y personalización como
                  usuario de los servicios, haciendo más segura su cuenta y más
                  eficaces los mismos. Usted puede optar por bloquear, eliminar
                  o deshabilitar las “cookies” directamente en su navegador.
                  EJERCICIO DE LOS DERECHOS DEL ARCO <br />
                  Con apego a lo previsto por la Ley, FINGANAS S.A.P.I DE CV
                  SOFOM ENR cuenta con procedimientos sencillos y eficaces para
                  atender a las solicitudes de derechos de Acceso,
                  Rectificación, Cancelación y Oposición que llegase a
                  presentar, los cuales podrán ser ejercidos mediante formulario
                  que podrá obtenerse mediante previa solicitud mediante correo
                  electrónico. El correo electrónico para recibir sus dudas o
                  manifestaciones respecto de sus derechos ARCO es el siguiente:
                  contacto@fitalmx.com, en donde en caso de solicitarlo le
                  haremos conocer el procedimiento para ello.
                  <br />
                  Todos los derechos reservados, FINGANAS S.A.P.I DE CV SOFOM
                  ENR.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    borderColor: "#FFC72C",
                    border: 2,
                    borderRadius: 20,
                    width: 170,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "#FFFFFF",
                      display: "flex",
                      width: "100%",
                      borderRadius: 20,
                    }}
                    onClick={() => setOpenTerms(false)}
                  >
                    OK
                  </Button>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Modal>
        <Link component={"button"} onClick={() => setOpenPrivacy(true)}>
          <Typography>{t.raw("legal.options")[1]}</Typography>{" "}
        </Link>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openPrivacy!}
          onClose={() => setOpenPrivacy(false)}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={openPrivacy!}>
            <Box sx={style}>
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  color: "#999696",
                  p: 4,
                  marginBottom: 10,
                }}
              >
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "justify",
                    mb: 3,
                  }}
                >
                  TERMINOS Y CONDICIONES. <br />
                  ACEPTACION DE TERMINOS <br />
                  Acepta y otorga los permisos adecuados de la utilización y
                  acceso a nuestra página web donde FINGANAS S.A.P.I DE CV SOFOM
                  ENR. le hace saber a usted que expresamente acepta dicha
                  autorización para que la información que se recabe al ingresar
                  a nuestro portal, siendo así de vital importancia la atención
                  a sus datos sin que estos sean vulnerados brindara un manejo
                  adecuado de los mismos, proporcionando seguridad y protección
                  cumpliendo la finalidad para la cual fueron recabados, sin
                  promover la discriminación, racismo, o alguna otra distinción
                  malintencionada que ponga en peligro la integridad de los
                  involucrados, haciendo valer sus derechos únicos e inviolables
                  de cada uno.
                  <br />
                  FINGANAS S.A.P.I DE CV SOFOM ENR ,se reserva el derecho de
                  actualizar la presente Política de privacidad en cualquier
                  momento mediante la publicación de una versión revisada en LOS
                  SITIOS. La versión revisada entrará en vigor en el momento de
                  su publicación. Además, si la versión revisada incluye un
                  cambio sustancial, se lo notificaremos con razonable
                  anticipación publicando una notificación en LOS SITIOS.
                  Después de este período de notificación, se considerará que ha
                  aceptado expresamente todas las modificaciones a esta
                  política.
                  <br />
                  En caso de que ocurra una vulneración de seguridad en
                  cualquier fase del tratamiento de datos personales, FINGANAS
                  S.A.P.I DE CV SOFOM ENR. lo hará del conocimiento general, de
                  manera inmediata en nuestro sitio web o mediante notificación
                  personal para que las personas involucradas en la vulneración
                  de sus datos personales tomen las medidas correspondientes a
                  fin de resguardar sus derechos. DATOS PERSONALES SENSIBLES.{" "}
                  <br />
                  Este aviso se apega a los lineamientos emitidos por el
                  Instituto Federal de Acceso a la Información y Protección de
                  Datos Personales (IFAI) así como a los preceptos de la Ley
                  Federal de Protección de Datos Personales en Posesión de los
                  Particulares.
                  <br />
                  contacto@fitalmx.com
                  <br />
                  coordinacion@fitalmx.com
                  <br />
                  Todos los derechos reservados, FINGANAS S.A.P.I DE CV SOFOM
                  ENR.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    borderColor: "#FFC72C",
                    border: 2,
                    borderRadius: 20,
                    width: 170,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "#FFFFFF",
                      display: "flex",
                      width: "100%",
                      borderRadius: 20,
                    }}
                    onClick={() => setOpenPrivacy(false)}
                  >
                    OK
                  </Button>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Modal>
        <Typography>{t.raw("legal.options")[2]}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, sm: 2, md: 11, lg: 11 },
          padding: { xs: "20px", sm: "20px", md: "20px", lg: "0px 50px" },
        }}
      >
        {customLogosFooter.map(({ logosFooter, linksImgs }, id) => (
          <Box key={id}>
            <Link href={`${linksImgs}`} target="_blank">
              <Box component={"img"} src={logosFooter} alt="Credenciales" />
            </Link>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0px 0px 100px 0px",
        }}
      >
        <Typography>{t("legal.rights")}</Typography>
      </Box>
    </Box>
  );
};

export default Footerlogos;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  overflowY: "auto",
  width: { xs: "75vw", sm: "65vw", md: "35vw" },
  height: { xs: "60vh", sm: "62vh", md: "60vh", lg: "50vh" },
  bgcolor: "#210044",
  boxShadow: 30,
  p: 1,
  borderRadius: "40px",
  flex: 1,
  display: "flex",
};

import { Box, Typography } from "@mui/material";
import PrincipalQuestions from "./PrincipalQuestions";

const Questions = () => {
  const faqItems = [
    {
      id: 1,
      question: "¿Qué entidad regula los fideicomisos utilizados por FITAL?",
      answer: "CNBV, Ley de Instituciones de Crédito.",
    },
    {
      id: 2,
      question:
        "¿Existen cláusulas específicas para proteger a los inversionistas en caso de incumplimiento del proyecto?",
      answer:
        "Si son cláusulas que cuidan los intereses de los propios inversionistas para evitar cualquier perdida de activos.",
    },
    {
      id: 3,
      question:
        "¿Cuál es el marco legal que respalda la tokenización en México?",
      answer: "Ley Para Regular las Instituciones de Tecnología Financiera.",
    },
    {
      id: 4,
      question:
        "¿Cómo se aseguran los derechos de los compradores de tokens en los fideicomisos?",
      answer:
        "Por medio de un contrato en el cual se le hay un marco flexible y seguro en protección jurídica, resguardando la propiedad tokenizada.",
    },
    {
      id: 5,
      question:
        "¿Qué sucede si un cliente desea revocar su participación en un fideicomiso?",
      answer:
        "Se cobra el fideicomiso o se subdivide, con las facilidades correspondientes sin afectar el fideicomiso.",
    },
    {
      id: 6,
      question:
        "¿Cómo se resuelven los conflictos relacionados con la propiedad tokenizada?",
      answer:
        "Depende de la inversión que se haya efectuado en cantidad y en ganancias establecidas al momento de generar el fideicomiso de garantía.",
    },
    {
      id: 7,
      question:
        "¿Qué obligaciones legales tiene el cliente al firmar el contrato con FITAL?",
      answer:
        "No divulgar información y cumplir con las obligaciones respectivas en las cláusulas del contrato de confidencialidad denominado NDA y en el Fideicomiso que busca efectuar el mismo sin complicaciones respetando lo acordado dando su propio consentimiento.",
    },
    {
      id: 8,
      question:
        "¿Qué garantías ofrece FITAL sobre la administración de los tokens?",
      answer:
        "Garantiza transparencia y seguridad en transacciones y administraciones de datos.",
    },
    {
      id: 9,
      question:
        "¿Qué sucede si el proyecto no cumple con las expectativas financieras o de venta?",
      answer:
        "Fital se adapta y busca la mejor propuesta para que se concrete la venta, ofreciendo compromiso y facilitar la inversión y la reducción de costos.",
    },
    {
      id: 10,
      question:
        "¿Los contratos de fideicomiso incluyen cláusulas de confidencialidad?",
      answer:
        "Cuentan con un contrato de confidencialidad que beneficia a la persona que lo firma y a la empresa que lo emite, tratándose de temas de seguridad y garantía. Protegiendo al que constituye el fideicomiso y a quien lo administra.",
    },
    {
      id: 11,
      question:
        " ¿Cómo se asegura FITAL de cumplir con la Ley Fintech en México?",
      answer:
        "Ofreciendo Transparencia y Claridad al generar dichos fideicomisos que cuenta con la aprobación y validación jurídica, apegada a las normas y leyes mexicanas vigentes, en todo momento con las respectivas regulaciones y certificaciones necesarias.",
    },
  ];

  return (
    <Box>
      <PrincipalQuestions items={faqItems} />
    </Box>
  );
};

export default Questions;

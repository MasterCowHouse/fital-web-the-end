import { Box } from "@mui/material";
import PrincipalQuestions from "./PrincipalQuestions";
import { useTranslations } from "next-intl";

const Questions = () => {
  const t = useTranslations("Questions");

  const faqItemsGeneral = [
    {
      id: 1,
      question: t("general.q1.q"),
      answer: t("general.q1.a"),
    },
    {
      id: 2,
      question: t("general.q2.q"),
      answer: t("general.q2.a"),
    },
    {
      id: 3,
      question: t("general.q3.q"),
      answer: t("general.q3.a"),
    },
    {
      id: 4,
      question: t("general.q4.q"),
      answer: t("general.q4.a"),
    },
    {
      id: 5,
      question: t("general.q5.q"),
      answer: t("general.q5.a"),
    },
    {
      id: 6,
      question: t("general.q6.q"),
      answer: t("general.q6.a"),
    },
    {
      id: 7,
      question: t("general.q7.q"),
      answer: t("general.q7.a"),
    },
    {
      id: 8,
      question: t("general.q8.q"),
      answer: t("general.q8.a"),
    },
    {
      id: 9,
      question: t("general.q9.q"),
      answer: t("general.q9.a"),
    },
    {
      id: 10,
      question: t("general.q10.q"),
      answer: t("general.q10.a"),
    },
    {
      id: 11,
      question: t("general.q11.q"),
      answer: t("general.q11.a"),
    },
  ];

  const faqItemsPti = [
    {
      id: 1,
      question: t("pti.q1.q"),
      answer: t("pti.q1.a"),
    },
    {
      id: 2,
      question: t("pti.q2.q"),
      answer: t("pti.q2.a"),
    },
    {
      id: 3,
      question: t("pti.q3.q"),
      answer: t("pti.q3.a"),
    },
    {
      id: 4,
      question: t("pti.q4.q"),
      answer: t("pti.q4.a"),
    },
    {
      id: 5,
      question: t("pti.q5.q"),
      answer: t("pti.q5.a"),
    },
    {
      id: 6,
      question: t("pti.q6.q"),
      answer: t("pti.q6.a"),
    },
    {
      id: 7,
      question: t("pti.q7.q"),
      answer: t("pti.q7.a"),
    },
    {
      id: 8,
      question: t("pti.q8.q"),
      answer: t("pti.q8.a"),
    },
    {
      id: 9,
      question: t("pti.q9.q"),
      answer: t("pti.q9.a"),
    },
  ];

  return (
    <Box sx={{ bgcolor: "#FFFFFF" }}>
      <PrincipalQuestions items={faqItemsGeneral} title={t("general.title")} />
      <PrincipalQuestions items={faqItemsPti} title={t("pti.title")} />
    </Box>
  );
};

export default Questions;

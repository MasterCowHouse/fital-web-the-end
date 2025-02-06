"use client";
// components/FaqSection.tsx
import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Collapse,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const StyledFAQItem = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-child": {
    borderBottom: "none",
  },
}));

const QuestionButton = styled(IconButton)({
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
});

export default function PrincipalQuestions({ items }: FAQProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Box sx={{ mx: "auto", mt: isSmallScreen ? 15 : 10, bgcolor: "white" }}>
      <Box display={"flex"} justifyContent={"flex-start"}>
        <Box
          display={"flex"}
          sx={{
            border: "3px solid",
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
            borderColor: "#FFC72C",
            borderLeft: "none",
            mt: isSmallScreen ? 5 : 10,
            px: isSmallScreen ? 2 : 4,
          }}
        >
          <Typography
            ml={isSmallScreen ? 2 : 20}
            mr={isSmallScreen ? 2 : 4}
            my={2}
            fontSize={isSmallScreen ? "20px" : "30px"}
            color={"#7F4CA5"}
          >
            Preguntas Frecuentes
          </Typography>
        </Box>
      </Box>
      {items.map((item) => (
        <StyledFAQItem key={item.id}>
          <QuestionButton
            onClick={() => handleToggle(item.id)}
            disableRipple
            sx={{
              justifyContent: "space-between",
              py: isSmallScreen ? 2 : 5,
              px: isSmallScreen ? 1 : 1.5,
              ml: isSmallScreen ? 0 : 10,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                border: 1,
                borderColor: "#FFC72C",
                p: 1,
                borderRadius: 12,
                fontSize: isSmallScreen ? "12px" : "inherit",
              }}
            >
              {item.question}
              <ExpandMoreIcon
                sx={{
                  transform: expandedId === item.id ? "rotate(180deg)" : "none",
                  transition: "transform 0.3s ease",
                  color: "#FFC72C",
                  width: isSmallScreen ? 20 : 30,
                  height: isSmallScreen ? 20 : 30,
                }}
              />
            </Typography>
          </QuestionButton>

          <Collapse in={expandedId === item.id}>
            <Box sx={{ pb: 2, px: isSmallScreen ? 1 : 1.5 }}>
              <Typography
                variant="body1"
                color="#606060"
                sx={{ lineHeight: 1.6, ml: isSmallScreen ? 2 : 10 }}
              >
                {item.answer}
              </Typography>
            </Box>
          </Collapse>
        </StyledFAQItem>
      ))}
    </Box>
  );
}

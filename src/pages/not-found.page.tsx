import { Box, Button, Typography, keyframes } from "@mui/material";
import { styled } from "@mui/material/styles";
import { notFoundLabels } from "../utils/labels";
import { useNavigate } from "react-router";

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
`;

const BlinkingText = styled("text")(({ theme }) => ({
  animation: `${blinkAnimation} 1.5s infinite ease-in-out`,
  fill: theme.palette.error.main,
  fontWeight: "bold",
  fontSize: "48px",
}));

const AlertIcon = () => {
  return (
    <Box sx={{ width: 120, height: 120, margin: "auto", mb: 2 }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="50,10 95,90 5,90"
          fill="#f8d7da"
          stroke="#d9534f"
          strokeWidth="5"
        />
        <BlinkingText x="43" y="75">
          !
        </BlinkingText>
      </svg>
    </Box>
  );
};

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <AlertIcon />
      <Typography variant="h3" color="error" gutterBottom>
        {notFoundLabels.title}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        {notFoundLabels.button}
      </Button>
    </Box>
  );
}

/*  */

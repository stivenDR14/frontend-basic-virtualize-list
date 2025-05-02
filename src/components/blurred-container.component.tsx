import { Box } from "@mui/material";
import { ReactNode } from "react";

interface BlurredContainerProps {
  children: ReactNode;
}

const BlurredContainer = ({ children }: BlurredContainerProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "fit-content",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            boxShadow: `
              inset 0 0 20px 8px white,
              inset 0 0 30px 10px rgba(255, 255, 255, 0.8)
            `,
            pointerEvents: "none",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BlurredContainer;

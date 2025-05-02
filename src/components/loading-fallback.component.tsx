import { Box, CircularProgress, Typography } from "@mui/material";
import { loadingLabels } from "../utils/labels";

export const LoadingFallback = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress size={40} />

      <Typography variant="h4">{loadingLabels.loading}</Typography>
    </Box>
  );
};

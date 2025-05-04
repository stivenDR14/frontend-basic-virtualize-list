import { Button, Box, CircularProgress } from "@mui/material";

import { logoutButtonLabels } from "../utils/labels";
import { useAuth } from "../hooks/auth.hook";

export default function LogoutButtonComponent() {
  const { logout, isLoading } = useAuth();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 16,
        left: 16,
        zIndex: 1100,
      }}
    >
      <Button
        disabled={isLoading}
        startIcon={
          isLoading ? <CircularProgress size={20} color="inherit" /> : null
        }
        variant="contained"
        color="primary"
        onClick={() => logout()}
      >
        {logoutButtonLabels.logout}
      </Button>
    </Box>
  );
}

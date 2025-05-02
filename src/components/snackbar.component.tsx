import { Alert, AlertColor, Snackbar } from "@mui/material";

interface SnackbarComponentProps {
  handleCloseSnackbar: () => void;
  snackbarOpen: boolean;
  snackbarSeverity: AlertColor;
  snackbarMessage: string;
}

export const SnackbarComponent = ({
  handleCloseSnackbar,
  snackbarOpen,
  snackbarSeverity,
  snackbarMessage,
}: SnackbarComponentProps) => {
  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={handleCloseSnackbar}
        severity={snackbarSeverity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

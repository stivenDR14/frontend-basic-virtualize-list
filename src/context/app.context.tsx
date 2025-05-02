import {
  createContext,
  FC,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { SnackbarComponent } from "../components/snackbar.component";
import { AlertColor } from "@mui/material";

export type AppContextInterface = {
  authData: string;
  setAuthData: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showNotification: (message: string, severity: AlertColor) => void;
  snackbarOpen: boolean;
  snackbarMessage: string;
  snackbarSeverity: AlertColor;
  handleCloseSnackbar: (
    event?: SyntheticEvent | Event,
    reason?: string
  ) => void;
};

export const AppContext = createContext({} as AppContextInterface);

/**
 * @param params params
 * @param params.children children
 * @param params.initValueBarBet initValue form bet bar
 * @param params.initValueCustomComboBarBet init value for custom combo bet bar
 * @returns HomeContextProvider
 */
export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authData, setAuthData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>("info");

  const handleCloseSnackbar = (
    event?: SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const showNotification = useCallback(
    (message: string, severity: AlertColor) => {
      setSnackbarMessage(message);
      setSnackbarSeverity(severity);
      setSnackbarOpen(true);
    },
    []
  );

  useEffect(() => {
    console.log("authData", authData);
  }, [authData]);

  const value = {
    authData,
    setAuthData,
    isLoading,
    setIsLoading,
    showNotification,
    snackbarOpen,
    snackbarMessage,
    snackbarSeverity,
    handleCloseSnackbar,
  };
  return (
    <AppContext.Provider value={value}>
      <>
        {children}
        <SnackbarComponent
          handleCloseSnackbar={handleCloseSnackbar}
          snackbarOpen={snackbarOpen}
          snackbarSeverity={snackbarSeverity}
          snackbarMessage={snackbarMessage}
        />
      </>
    </AppContext.Provider>
  );
};

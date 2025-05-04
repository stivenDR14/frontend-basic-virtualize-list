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
import { authService } from "../services/auth.services";
import { LoadingFallback } from "../components/loading-fallback.component";
import axios, { AxiosRequestHeaders } from "axios";

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
  const [interceptorLayer, setInterceptorLayer] = useState<number>();

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
  const handleSetToken = (token: string) => {
    setAuthData(token);
  };

  const handleSetInterceptorLayer = useCallback(() => {
    if (interceptorLayer !== undefined) {
      axios.interceptors.request.eject(interceptorLayer);
    }

    const myInterceptor = axios.interceptors.request.use(
      (config) => {
        const apiUrl = import.meta.env.VITE_API_URL;

        console.log("config.url", config.url);
        console.log("apiUrl", apiUrl);
        if (config.url && config.url.startsWith(apiUrl)) {
          config.headers = {
            ...config.headers,
            Authentication: `Bearer ${authData}`,
          } as unknown as AxiosRequestHeaders;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    setInterceptorLayer(myInterceptor);
  }, [authData]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    setIsLoading(true);
    if (token) {
      authService
        .validateToken(token, handleSetToken)
        .finally(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          setSnackbarMessage(error.message);
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleSetInterceptorLayer();
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
        {isLoading ? <LoadingFallback /> : <>{children}</>}
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

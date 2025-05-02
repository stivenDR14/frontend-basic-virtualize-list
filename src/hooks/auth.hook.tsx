import { useState, useContext } from "react";
import { authService } from "../services/auth.services";
import { AppContext } from "../context/app.context";
import { errorMessages, successMessages } from "../utils/labels";
export const useAuth = () => {
  const { setAuthData, showNotification } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.login({ email, password });
      setAuthData(response.token);

      showNotification(successMessages.loginSuccess, "success");

      setIsLoading(false);
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : errorMessages.mockError;

      setError(errorMessage);
      showNotification(errorMessage, "error");

      setIsLoading(false);
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);

    try {
      await authService.logout();
      setAuthData("");
      showNotification("Sesión cerrada con éxito", "info");
      setIsLoading(false);
    } catch (error) {
      console.error("Error during logout:", error);
      showNotification("Error al cerrar sesión", "error");
      setIsLoading(false);
    }
  };

  return {
    login,
    logout,
    isLoading,
    error,
  };
};

import { useState, useContext } from "react";
import { authService } from "../services/auth.services";
import { AppContext } from "../context/app.context";
import { errorMessages, loginLabels, successMessages } from "../utils/labels";
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
      localStorage.setItem("token", response.token);

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
      await authService.logout(() => setAuthData(""));

      showNotification(loginLabels.logoutSuccess, "success");
      setIsLoading(false);
    } catch (error) {
      console.error("Error during logout:", error);
      showNotification(errorMessages.logoutError, "error");
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

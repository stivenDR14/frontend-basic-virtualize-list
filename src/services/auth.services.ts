import { errorMessages } from "../utils/labels";

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    email: string;
  };
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const shouldFail = (): boolean => {
  return Math.floor(Math.random() * 3) === 0;
};

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    await delay(1500);

    if (shouldFail()) {
      throw new Error(errorMessages.mockError);
    }

    return {
      token: `token-fake-${Date.now()}`,
      user: {
        email: credentials.email,
      },
    };
  },

  validateToken: async (
    token: string,
    setAuthData: (token: string) => void
  ): Promise<void> => {
    await delay(1500);

    if (!token.includes("token-fake")) {
      setAuthData("");
      localStorage.removeItem("token");
      throw new Error(errorMessages.mockTokenWrongError);
    }

    if (shouldFail()) {
      throw new Error(errorMessages.mockTokenError);
    }
    setAuthData(token);
  },

  logout: async (setAuthData: (token: string) => void): Promise<void> => {
    await delay(1500);
    setAuthData("");
    localStorage.removeItem("token");
    return;
  },
};

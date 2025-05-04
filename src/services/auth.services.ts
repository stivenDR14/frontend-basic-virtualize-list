import { errorMessages } from "../utils/labels";

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  code: number;
  user: {
    email: string;
  };
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const shouldFail = (): boolean => {
  return Math.floor(Math.random() * 4) === 0;
};

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (shouldFail()) {
      return {
        token: "",
        code: 401,
        user: {
          email: credentials.email,
        },
      };
    }

    return {
      token: `token-fake-${Date.now()}`,
      code: 200,
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

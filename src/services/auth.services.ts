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
  return Math.floor(Math.random() * 2) === 0;
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

  logout: async (): Promise<void> => {
    await delay(1500);
    return;
  },
};

import { createContext, FC, ReactNode, useEffect, useState } from "react";

export type AppContextInterface = {
  authData: string;
  setAuthData: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
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

  useEffect(() => {
    console.log("authData", authData);
  }, [authData]);

  const value = {
    authData,
    setAuthData,
    isLoading,
    setIsLoading,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

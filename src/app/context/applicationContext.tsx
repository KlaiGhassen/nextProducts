"use client"

import { createContext, useState } from "react";
import User from "../models/User";
interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}
export const AppContext = createContext<AppContextType>({
  user: null,
  setUser: _ => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

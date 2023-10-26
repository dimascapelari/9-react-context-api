import { createContext, useState } from "react";

export const LoggedContext = createContext();

export const LoggedContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  return (
    <LoggedContext.Provider value={{ logged, setLogged }}>
      {children}
    </LoggedContext.Provider>
  );
};

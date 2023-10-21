import { createContext, useState } from "react";

export const LoggedContext = createContext();

export const LoggedContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(true);

  return (
    <LoggedContext.Provider value={{ logged, setLogged }}>
      {children}
    </LoggedContext.Provider>
  );
};

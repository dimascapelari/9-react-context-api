import { createContext, useState } from "react";

export const RedContext = createContext(null);

export const RedContextProvider = ({ children }) => {
  const [red, setRed] = useState(false);

  return (
    <RedContext.Provider value={{ red, setRed }}>
      {children}
    </RedContext.Provider>
  );
};

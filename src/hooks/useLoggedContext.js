import { useContext } from "react";
import { LoggedContext } from "../context/LoggedContext";

export const useLoggedContext = () => {
  const context = useContext(LoggedContext);

  if (!context) {
    console.log("Usuário não está logado");
  }

  return context;
};

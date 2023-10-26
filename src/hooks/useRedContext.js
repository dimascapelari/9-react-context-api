import { useContext } from "react";
import { RedContext } from "../context/RedContext";

export const useRedContext = () => {
  const context = useContext(RedContext);

  if (!context) {
    console.log("Usuário não está logado");
  }

  return context;
};

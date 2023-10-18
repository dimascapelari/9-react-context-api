import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const Products = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Products</h1>
      <p>valor do contador: {counter}</p>
    </div>
  );
};

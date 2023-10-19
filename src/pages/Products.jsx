import { useCounterContext } from "../hooks/useCounterContext";

export const Products = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Products</h1>
      <p>valor do contador: {counter}</p>
    </div>
  );
};

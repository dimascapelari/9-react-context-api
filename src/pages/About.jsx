import { useCounterContext } from "../hooks/useCounterContext";

export const About = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>About</h1>
      <p>valor do contador: {counter}</p>
    </div>
  );
};

import { ChangeCounter } from "../components/ChangeCounter";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

export const Home = () => {
  const { counter } = useCounterContext();

  // 5 - context mais complexo
  const { color } = useTitleColorContext();

  console.log(color);

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>valor do contador: {counter}</p>
      {/* 3 - alterando o valor do contexto */}
      <ChangeCounter />
    </div>
  );
};

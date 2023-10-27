import { ChangeCounter } from "../components/ChangeCounter";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

import { useLoggedContext } from "../hooks/useLoggedContext";

import { useRedContext } from "../hooks/useRedContext";

export const Home = () => {
  const { counter } = useCounterContext();

  const { logged, setLogged } = useLoggedContext();

  const { red, setRed } = useRedContext();

  // 5 - context mais complexo
  const { color, dispatch } = useTitleColorContext();

  console.log(color);

  // 6 - alterando contexto complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>valor do contador: {counter}</p>
      {/* 3 - alterando o valor do contexto */}
      <ChangeCounter />

      {/*  6 - alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>

      <hr></hr>
      <div style={{ marginTop: "50px" }}>
        <h1>{logged === true ? <p>Logado</p> : <p>Deslogado</p>}</h1>
        <button
          onClick={() => setLogged(!logged)}
          style={{
            width: "100px",
            height: "30px",
            margin: "50px",
            borderRadius: "10px",
          }}
        >
          Login
        </button>
      </div>
      <hr />
      <div style={{ marginTop: "50px" }}>
        {red === true ? (
          <h2 style={{ color: "red" }}>É vermelho</h2>
        ) : (
          <h2>Não é vermelho</h2>
        )}
      </div>
      <button
        onClick={() => setRed(!red)}
        style={{
          width: "100px",
          height: "30px",
          margin: "50px",
          borderRadius: "10px",
        }}
      >
        {red === false ? (
          <span style={{ color: "red" }}>Ficar Vermelho</span>
        ) : (
          "Tirar Vermelho"
        )}
      </button>
      <hr />
    </div>
  );
};

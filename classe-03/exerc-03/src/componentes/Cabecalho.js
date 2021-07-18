import { useState, useContext } from "react";
import { ContextoIncrementarCarrinho } from "../App";
import { Carrinho } from "./Carrinho";

export function Cabecalho() {
  const{carrinho, produtos, adicionarAoCarrinho, mudarQtdNoCarrinho, removerDoCarrinho} = useContext(ContextoIncrementarCarrinho);
  const total = Object.values(carrinho).reduce(
    (soma, qtdItemEspecifico) => soma + qtdItemEspecifico,
    0
  );

  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  return (
    <header>
      <div className="limitador">
        <h1>Gourmandices</h1>
        <button onClick={() => setCarrinhoAberto((x) => !x)}>
          Carrinho
          <span className={`badge ${total === 0 ? "zero" : ""}`}>{total}</span>
          <Carrinho
            aberto={carrinhoAberto}
            setAberto={setCarrinhoAberto}
          />
        </button>
      </div>
    </header>
  );
}

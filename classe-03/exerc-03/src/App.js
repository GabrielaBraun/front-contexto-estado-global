import { useState, createContext } from "react";
import { Cabecalho } from "./componentes/Cabecalho";
import { Produtos } from "./componentes/Produtos";
import { produtos } from "./utils/produtos";
import "./styles.css";

export const ContextoIncrementarCarrinho = createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState({});

  const adicionarAoCarrinho = (id) =>
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };
      novoCarrinho[id] = (novoCarrinho[id] || 0) + 1;

      return novoCarrinho;
 });
  const mudarQtdNoCarrinho = (id, qtd) =>
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };
      novoCarrinho[id] = (novoCarrinho[id] || 0) + qtd;

      return novoCarrinho;
    });

  const removerDoCarrinho = (id) =>
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };

        delete novoCarrinho[id];
        return novoCarrinho;
      
    });
  const valorDoContextoIncrementar = {carrinho, produtos, adicionarAoCarrinho, mudarQtdNoCarrinho, removerDoCarrinho}
  return (
    <div className="App">
      <ContextoIncrementarCarrinho.Provider value={valorDoContextoIncrementar}>
      <Cabecalho/>
      </ContextoIncrementarCarrinho.Provider>
      
      <Produtos
        produtos={produtos}
        carrinho={carrinho}
        adicionarCarrinho={(id) => mudarQtdNoCarrinho(id, 1)}
      />
    </div>
  );
}

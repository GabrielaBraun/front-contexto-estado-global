import { useState, useContext, createContext } from "react";
import { Cabecalho } from "./componentes/Cabecalho";
import { Produtos } from "./componentes/Produtos";
import { produtos } from "./utils/produtos";
import "./styles.css";

export const ContextoCarrinho = createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState({});
  const incrementarCarrinho = (id, qtd) =>
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };
      novoCarrinho[id] = (novoCarrinho[id] || 0) + qtd;

      if (novoCarrinho[id] === 0) {
        delete novoCarrinho[id];
      }

      return novoCarrinho;
    });
  
  const valorDoContexto = {carrinho, produtos, incrementarCarrinho};
  return (
    <div className="App">
      <ContextoCarrinho.Provider value={valorDoContexto}>
        <Cabecalho/>
        <Produtos
          produtos={produtos}
          carrinho={carrinho}
          adicionarCarrinho={(id) => incrementarCarrinho(id, 1)}
        />
      </ContextoCarrinho.Provider>
    </div>
  );
}

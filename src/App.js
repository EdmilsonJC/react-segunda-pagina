import Botao from "./Componentes/botao";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <label>
          User:
          <input type="text" />
        </label>

        <label>
          Senha:
          <input type="password" />
        </label>
      </form>

      <button>Logar</button>
      <button>Esqueci a senha</button>
      <Botao descricao="Componente Botão" nome="Vasco"></Botao>
    </div>
  );
}

export default App;

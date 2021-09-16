import { GlobalStyle } from "./styles/global"; // Importando o estilo global

export function App() { //permite que o componente seja exportado com o mesmo nome da função
  return (
    <div className="App">
      <h1>Hello World</h1>
      <GlobalStyle/> {/* Usando o estilo global */}
    </div>
  );
}

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"; // Importando o estilo global

export function App() { //permite que o componente seja exportado com o mesmo nome da função
  return (
    <> {/* O React precisa de um elemento raiz, no caso, o elemento <> </>  que é uma tag fragment */}
      <Header/>
      <Dashboard/>
      <GlobalStyle/> {/* Usando o estilo global */}
    </>
  );
}

import styled from 'styled-components';

//Letra maiscula porque isso é um componente
const Title = styled.h1`
  color: #8257e6;
  font-size: 48px;
`

export function App() { //permite que o componente seja exportado com o mesmo nome da função
  return (
    <div className="App">
      <Title>Hello World</Title> {/* Utilizando o styled-components para criar um componente  */}
    </div>
  );
}

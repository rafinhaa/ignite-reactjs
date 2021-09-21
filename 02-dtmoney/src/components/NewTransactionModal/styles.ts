import styled from "styled-components";
import { darken, transparentize } from "polished";  // Manipulação de cores através de funções


export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;        
    }
    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background-color: #e7e9ee;
        border: 1px solid #d7d7d7;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }
        & + input { // Todo o input que não seja o primeiro deve ter um margin-top
            margin-top: 1rem;   
        }
    }
    button[type="submit"] { //Estilizando o button de submit */
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: filter 0.2s;

        &:hover { /* Ao passar o mouse sobre o botão */
            filter: brightness(0.9); /* Diminuir a luminosidade em 90% */
        }
    }    
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.25rem;
`;

interface RadioBoxProps { // Criação de propriedades para o RadioBox
    isActive: boolean;
    activeColor: 'green' | 'red'; // Criação de propriedade para a cor do botão
}

const colors = { // É criado dessa forma porque como é utilizado no JS, o JS não consegue acessar variaveis de CSS
    green: '#33cc95',
    red: '#e52e4D',
}

// O RadioBox recebe a propriedade isActive e se ela for true, o background-color mudará de cor
export const RadioBox = styled.div<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: ${ (props) => props.isActive ? 
            transparentize(
                0.9, // Transparencia de 90%
                colors[props.activeColor] // activeColor Retorna 'green' ou 'red', colors é um objeto que tem 'green' ou 'red', quando passado a propriedade activeColor, o valor retornado será o valor de 'green' ou 'red' que está dentro de colors
                )
        : 
            'transparent'}; // Interpolação '$ + chaves' para acessar propriedades
    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
        width: 2rem;
        height: 2rem;
    }

    span {
        display: inline-block;
        font-size: 1rem;
        margin-left: 0.1rem;
        color: var(--text-title);
    }
`;
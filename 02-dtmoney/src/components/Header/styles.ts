import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto; /* centraliza o conteúdo */
    padding: 2rem 1rem 12rem; // 1rem = ao font-size do :root - estamos colocando 16px (1rem) nas laterais e 12rem (192px) para baixo */
    display: flex;  /* para que o conteúdo fique em linha */
    align-items: center; /* centraliza o conteúdo */
    justify-content: space-between; /* para haja um espaço entre os elementos (logo e botão) */
    button {
        font-size: 1rem;  /* para que o botão fique com o mesmo tamanho do texto */
        color: #FFF;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem; /* 2rem (32px) na esquerda e direita dentro do button*/
        border-radius: 0.25rem; /* para que o botão fique com um raio de 4px no desktop */
        height: 3rem;
        transition: filter 0.2s; /* filtro de transição */
        &:hover { /* Quando o mouse estiver sobre o botão */
            filter: brightness(0.9); /* altera a luminosidade do botão */
        }
    }
`;
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root { /**  Variavel que define o estilo global */
        --background: #f0f2f5;
        --red: #E52E4D;
        --green: #33CC95;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, input, textarea, button { /** Definindo a fonte padrão */
        font-family: 'Poppins', sans-serif; /** Caso a primeira fonte vai usar uma fonte padrao do sistema operacional */
        font-weight: 400;
    } 
    h1, h2, h3, h4, h5, h6, strong { /** Fontes de negrito */
        font-weight: 600;
    }

    /** Fonte size para desktop inicia em 16px */
    html { /**  Define o tamanho da pagina */
        @media (max-width: 1080px) { /** Quando a pagina for ate 1080px de largura */
            font-size: 93.75%; /** reduz a font-size para 93.75% ou seja 15px*/
        }
        @media (max-width: 720px) { /** Quando a pagina for ate 720px de largura */
            font-size: 87.15%; /** reduz a font-size para 87.15% ou seja 14px*/
        }
        /** Definimos essas configuraçoes porque vamos usar o REM */
        /** 1 REM e igual ao font-size da nossa pagina se o font-size = 16px, 1 REM = 16px */
        /** Se o font-size esta diminuindo conforme a largura da pagina, se utilizarmos o REM na aplicaçao para definit o tamanho dos elementos (botoes), ao diminuir a largura da pagina, o tamanho dos elementos diminuirá conforme a largura da pagina */
        /** Utilizar percentual para definir o tamanho da fonte, e a melhor pratica caso o usuario esteja utilizando o zoom do navegador */
    }
    body {
        background: var(--background); /** Utilizando a variavel criada */
        -webkit-font-smoothing: antialiased; /** Aplica um efeito de antialiasing */
    }
    button {
        cursor: pointer; /** Define o cursor do mouse como um ponteiro */
    }
    [disabled] { /** Tudo o que estiver desabilidato na aplicaçao */
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed; /* Ocupa a tela inteira */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex; /* Alinhamento horizontal e vertical */
        align-items: center; /* Centraliza o elemento */
        justify-content: center; /* Centraliza o conteudo */        
    }
    .react-modal {
        width: 100%; /* Se tiver com menos de 576px fica com 100% */
        max-width: 576px; /* Se tiver com no maximo 576px para de aumentar */
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;

    }
`;
import styled from "styled-components";

//Componente que renderiza o Dashboard
export const Container = styled.div`
    display: grid; /* São três divs, uma para cada coluna */
    grid-template-columns: repeat(3, 1fr); /* Três colunas com um tamanho flexível para todas grid-template-columns: 1fr 1fr 1fr*/
    gap: 2rem; /* O espaçamento entre as divs */
    margin-top: -10rem;
    div { /* Estilizando todas as divs dentro do Container */
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        header {
            display: flex; /* Alinhamento horizontal */
            align-items: center; /* Alinhamento Central */
            justify-content: space-between; /* Espaço entre os elementos */
        }
        strong {
            margin-top: 1rem;
            font-size: 2rem;
            line-height: 3rem; 
            font-weight: 500;
            display: block; /* Por padrão, o elemento é inline, então o margin-top não funciona. O elemento será ocupado todo o espaço disponível  */
        }
        &.highlight-background { /* A div que tem a classe highlight-background terá essa estilização adicional */
        background: var(--green);
        color: #FFF;
        }
    }    
`;
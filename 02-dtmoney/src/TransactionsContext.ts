import { createContext } from "react";

export const TransactionsContext = createContext(
    [] //Valor padrão quando o contexto for acessado e não tiver sido carregado nada
);
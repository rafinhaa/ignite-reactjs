import { createContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
	id: number,
	title: string,
	amount: number,
	category: string,
	type: string,
	createdAt: string
}

interface TransactionsProviderProps {
    children: React.ReactNode // Aceita qualquer conteúdo dentro do componente (TAGS HTML)
}

export const TransactionsContext = createContext<Transaction[]>( // Tipo de informação que será passada para o contexto
    [] //Valor padrão quando o contexto for acessado e não tiver sido carregado nada
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
	
	useEffect(() => {
		api.get('transactions')		
		.then(response => setTransactions(response.data.transactions))
	}, []);
    
    return (
        <TransactionsContext.Provider value={transactions}> {/*Valor que será passado para o contexto */}
            {children}
        </TransactionsContext.Provider>
    );
} 
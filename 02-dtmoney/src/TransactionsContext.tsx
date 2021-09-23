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

interface TransactionsContextData {
	transactions: Transaction[], // Lista de transações
	createTransaction: (transaction: TransactionInput) => void, // Função para criar uma transação
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; // Herda todas as propriedades de Transaction, exceto id e createdAt

interface TransactionsProviderProps {
    children: React.ReactNode // Aceita qualquer conteúdo dentro do componente (TAGS HTML)
}

export const TransactionsContext = createContext<TransactionsContextData>( // Tipo de informação que será passada para o contexto
    {} as TransactionsContextData // Forçando o tipo de informação que será passada para o contexto
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
	
	function createTransaction(transaction: TransactionInput) {	// Função para criar uma nova transação que será do tipo TransactionInput	
		//Fazendo a requisição para a API
		api.post('transactions', transaction);
}

	useEffect(() => {
		api.get('transactions')		
		.then(response => setTransactions(response.data.transactions))
	}, []);
    
    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}> {/*  Passando as transações da api e a função para criar uma nova transação, tudo como objeto*/}
            {children}
        </TransactionsContext.Provider>
    );
} 
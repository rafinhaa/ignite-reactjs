import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

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
	createTransaction: (transaction: TransactionInput) => Promise<void>, // Função para criar uma transação que retorna uma promise de void
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; // Herda todas as propriedades de Transaction, exceto id e createdAt

interface TransactionsProviderProps {
    children: React.ReactNode // Aceita qualquer conteúdo dentro do componente (TAGS HTML)
}

const TransactionsContext = createContext<TransactionsContextData>( // Tipo de informação que será passada para o contexto
    {} as TransactionsContextData // Forçando o tipo de informação que será passada para o contexto
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
	
	// Função assincrona que retorna por pradrão uma Promise
	async function createTransaction(transactionInput: TransactionInput) {	// Função para criar uma nova transação que será do tipo TransactionInput	
		//Fazendo a requisição para a API
		const response = await api.post('transactions', {
			...transactionInput,
			createdAt: new Date(), // Adicionando a data atual
		}); // Aguarda a resposta da API e armazena na variável response
		const { transaction } = response.data; // Armazena o objeto transaction que foi retornado pela API
		setTransactions([...transactions, transaction]); // Atualiza a lista de transações
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

export function useTransactions() {
	const context = useContext(TransactionsContext); // Pegando o contexto

	return context; // Retornando o contexto
}
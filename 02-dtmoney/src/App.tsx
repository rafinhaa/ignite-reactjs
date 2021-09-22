import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"; // Importando o estilo global
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext } from "./TransactionsContext";

Modal.setAppElement('#root'); // Configurando o modal para ser aberto dentro do elemento root

export function App() { //permite que o componente seja exportado com o mesmo nome da função
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }
    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }
	return (
		<TransactionsContext.Provider value={[]}> {/* É um objeto e acessamos a propriedade provider, value é obrigatório e informa o valor atual do contexto*/}
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/> {/*Passando a função para o componente Header chamar o modal */ }
			<Dashboard/>
			<NewTransactionModal isOpen={isNewTransactionModalOpen} onClose={handleCloseNewTransactionModal} />			
			<GlobalStyle/> {/* Usando o estilo global */}
		</TransactionsContext.Provider>
	);
}

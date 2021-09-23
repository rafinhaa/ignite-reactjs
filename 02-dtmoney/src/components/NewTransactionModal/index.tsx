import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState, useContext } from 'react';
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function NewTransactionModal({ isOpen, onClose }: NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext);
    const [type, setType] = useState('deposit'); // Usando o useState para armazenar o tipo de transação

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    
    //Toda vez que o form for submetido, o onSubmit será chamado
    // O onSubmit recebe como parâmetro o evento do form, que vem com as informações do form
    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();  
        createTransaction({title,amount,category,type});     
    }

    return (
        <Modal         
				isOpen={isOpen}
				onRequestClose={onClose}
                overlayClassName="react-modal-overlay" // Passa a classe css do modal para o overlay
                className="react-modal"
			>
                <button onClick={onClose} className="react-modal-close">
                    <img src={closeImg} alt="Fechar" />
                </button>
                <Container onSubmit={handleCreateNewTransaction}> {/** Isso é um form */}
                    <h2>Cadastrar transação</h2>
                    <input 
                        value={title} // O value receberá o valor que está salvo no state
                        onChange={ event => setTitle(event.target.value) } // Quando o usuário digitar algo, o onChange será chamado, onChange recebe o evento do input
                        placeholder="Título" 
                    />
                    <input value={amount} onChange={ event => setAmount(event.target.valueAsNumber) } type='number' placeholder="Valor" />
                    <TransactionTypeContainer> 
                        <RadioBox onClick={() => {setType('deposit')}} 
                            isActive={type==='deposit'}
                            activeColor="green"
                        > { /* isActive é um boolean que diz se o radio está selecionado ou não */}
                            <span>Entrada</span>
                            <img src={incomeImg} alt="Entrada" />
                        </RadioBox>
                        <RadioBox onClick={() => {setType('withdraw')}} isActive={type==='withdraw'} 
                            activeColor="red"
                        >
                            <span>Saída</span>
                            <img src={outcomeImg} alt="Saída" />
                        </RadioBox>
                    </TransactionTypeContainer>                    
                    <input value={category} onChange={ event => setCategory(event.target.value) } placeholder="Categoria" />
                    <button type="submit">Cadastrar</button>
                </Container>				
		</Modal>
    );
}

import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function NewTransactionModal({ isOpen, onClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit'); // Usando o useState para armazenar o tipo de transação
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
                <Container> {/** Isso é um form */}
                    <h2>Cadastrar transação</h2>
                    <input placeholder="Título" />
                    <input type='number' placeholder="Valor" />
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
                    <input type='number' placeholder="Categoria" />
                    <button type="submit">Cadastrar</button>
                </Container>				
		</Modal>
    );
}
import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function NewTransactionModal({ isOpen, onClose }: NewTransactionModalProps) {
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
                        <button>
                            <span>Entrada</span>
                            <img src={incomeImg} alt="Entrada" />
                        </button>
                        <button>
                            <span>Saída</span>
                            <img src={outcomeImg} alt="Saída" />
                        </button>
                    </TransactionTypeContainer>                    
                    <input type='number' placeholder="Categoria" />
                    <button type="submit">Cadastrar</button>
                </Container>				
		</Modal>
    );
}
import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function NewTransactionModal({ isOpen, onClose }: NewTransactionModalProps) {
    return (
        <Modal 
				isOpen={isOpen}
				onRequestClose={onClose}
                overlayClassName="react-modal-overlay" // Passa a classe do modal para o overlay
                className="react-modal"
			>
                <Container> {/** Isso é um form */}
                    <h2>Cadastrar transação</h2>
                    <input placeholder="Título" />
                    <input type='number' placeholder="Valor" />
                    <input type='number' placeholder="Categoria" />
                    <button type="submit">Cadastrar</button>
                </Container>				
		</Modal>
    );
}
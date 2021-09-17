import logoImg from '../../assets/logo.svg'; // Importando a imagem do logo
import { Container, Content } from './styles';

interface HeaderProps { // Definindo o tipo de dados que será passado para o componente
    onOpenNewTransactionModal: () => void; // Função não recebendo nenhum parâmetro e não retornando nada
}

export function Header({onOpenNewTransactionModal}: HeaderProps) { // Desestruturando o props
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button onClick={onOpenNewTransactionModal} type="button">Nova transação</button>
            </Content>
        </Container>
    );
}
import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useContext} from "react";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
	const {transactions} = useTransactions();

	const summary = transactions.reduce( (acc, transaction) => {
		if (transaction.type === "deposit") {
			acc.deposits += Number(transaction.amount);
			acc.total += Number(transaction.amount);
		} else {
			acc.withdraws += Number(transaction.amount);
			acc.total -= Number(transaction.amount);
		}	
		return acc;
	},{
		// Inicializa o objeto com os valores padrões
		deposits: 0,
		withdraws: 0,
		total: 0,
	})

    return (
		<Container>

			<div>
				<header> {/* Cabeçalho da box */}
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>
				<strong>
					{
						summary.deposits.toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						})
					}
				</strong>
			</div>
			<div>
				<header> {/* Cabeçalho da box */}
					<p>Saídas</p>
					<img src={outcomeImg} alt="Saídas" />
				</header>
				<strong>
					{
						summary.withdraws.toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						})
					}	
				</strong>
			</div>
			<div className="highlight-background">
				<header> {/* Cabeçalho da box */}
					<p>Total</p>
					<img src={totalImg} alt="Total" />
				</header>
				<strong>
					{
						summary.total.toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						})
					}
				</strong>
			</div>

		</Container>
	);
}
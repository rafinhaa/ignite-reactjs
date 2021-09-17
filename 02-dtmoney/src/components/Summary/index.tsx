import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
    return (
		<Container>
			<div>
				<header> {/* Cabeçalho da box */}
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>
				<strong>R$ 1000</strong>
			</div>
			<div>
				<header> {/* Cabeçalho da box */}
					<p>Saídas</p>
					<img src={outcomeImg} alt="Saídas" />
				</header>
				<strong> - R$ 5000</strong>
			</div>
			<div className="highlight-background">
				<header> {/* Cabeçalho da box */}
					<p>Total</p>
					<img src={totalImg} alt="Total" />
				</header>
				<strong>R$ 500</strong>
			</div>

		</Container>
	);
}
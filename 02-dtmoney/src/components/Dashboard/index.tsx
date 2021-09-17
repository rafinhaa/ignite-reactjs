import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
	return (
		<Container>
			<Summary/> {/* Importando o novo componente */}
			<TransactionTable/>
		</Container>
	);
}
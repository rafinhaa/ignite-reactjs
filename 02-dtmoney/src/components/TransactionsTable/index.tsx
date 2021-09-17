import { Summary } from "../Summary";
import { Container } from "./styles";

export function TransactionTable() {
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>					
				</thead>
				<tbody>
				<tr>
						<td>Aluguel</td>
						<td className="deposit">R$ 1.000,00</td>
						<td>Aluguel</td>
						<td>01/01/2020</td>
					</tr>
					<tr>
						<td>Aluguel</td>
						<td className="withdraw"> - R$ 1.000,00</td>
						<td>Aluguel</td>
						<td>01/01/2020</td>
					</tr>
					<tr>
						<td>Aluguel</td>
						<td>R$ 1.000,00</td>
						<td>Aluguel</td>
						<td>01/01/2020</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}
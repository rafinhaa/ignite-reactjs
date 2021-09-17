import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {

	useEffect(() => {
		api.get('transactions')		
		.then(response => console.log(response.data))
	}, []);

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
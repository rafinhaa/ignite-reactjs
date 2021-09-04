export function RepositoryItem(props) { {/* Argumento de entrada do componente RepositoryItem */}
   return (
        <li>
            <strong>{props.repository}</strong> {/* Acessando o atributo repository do props */}
            <p>Descrição</p>
            <a href="">Acessar repo</a>
        </li>
   );
}
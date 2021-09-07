export function RepositoryItem(props) { {/* Argumento de entrada do componente RepositoryItem */}
   return (
        <li>
            <strong>{props.repository.name}</strong> {/* Acessando o atributo repository do props */}
            <p>{props.repository.description}</p>
            <a href={props.repository.url_html}>Acessar repo</a>
        </li>
   );
}
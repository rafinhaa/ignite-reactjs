//A interface é um contrato que define o que um objeto deve ter
interface RepositoryItemProps {    
    repository: {
        name: string;
        id: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props:RepositoryItemProps) { {/*props é do tipo RepositoryItemProps */}
   return (
        <li>
            <strong>{props.repository.name}</strong> {/* Acessando o atributo repository do props */}
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Acessar repo</a>
        </li>
   );
}
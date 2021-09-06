import { RepositoryItem } from "./RepositoryItem"; // Importando o componente RepositoryItem

import '../styles/repositories.scss';

export function RepositoryList(){    
    return (
        <section className="repository-list"> 
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository="uniform"/> { /* Chamando o componente RepositoryItem e passando o parâmetro repository como "uniform" */}
                <RepositoryItem/>
                <RepositoryItem/>
            </ul>   
        </section>
    );
}
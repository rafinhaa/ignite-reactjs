import {useState, useEffect}from 'react';
import { RepositoryItem } from "./RepositoryItem"; // Importando o componente RepositoryItem

import '../styles/repositories.scss';

export function RepositoryList(){    
    const [repositories, setRepositories] = useState([]); // Array de repositórios

    useEffect(() => {    // useEffect é para executar uma função quando o componente for renderizado     
            fetch('https://api.github.com/users/rafinhaa/repos') // Fazendo requisição ao github
            .then(response => response.json()) // Transformando a resposta em json
            .then(data => setRepositories(data)) // Atualizando o array de repositórios
    },  []); // [] é para executar uma função apenas uma vez

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                { 
                    repositories.map(
	                    repository => <RepositoryItem key={repository.id} repository={repository} /> // Cada repositório é um item do array de repositórios
	                )
                } {/* Percorrendo o array de repositórios e renderizando cada um deles */}
            </ul>   
        </section>
    );
}
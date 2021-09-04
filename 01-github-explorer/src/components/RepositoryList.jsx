const repositoryName = 'unform'; // Definindo um valor padrão para o nome do repositório

export function RepositoryList(){    
    return (
        <section className="repository-list"> 
            <h1>Lista de repositórios</h1>
            <ul>
                <li>
                    <strong>{repositoryName}</strong> {/* Usando chaves "{}" usar a variavel */}
                    <p>Descrição</p>
                    <a href="">Acessar repo</a>
                </li>
                <li>
                    <strong>reponame</strong>
                    <p>Descrição</p>
                    <a href="">Acessar repo</a>
                </li>
            </ul>   
        </section>
    );
}
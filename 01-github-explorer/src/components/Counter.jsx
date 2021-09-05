import {useState} from 'react'; 
/**
 * Toda função que inicia com use quer dizer que ela é um hook ou gancho 
 */

export function Counter() {
    const [counter, setCounter] = useState(0); /** Retorna dois arrays */
    function increment() {
        setCounter(counter + 1);
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button 
                type="button"
                onClick={increment /* Função que será chamada quando o usuário clicar no botão */}            
            >Increment</button>
        </div>
    );
}
import React from 'react';
import ReactDOM from 'react-dom';
import { createServer} from 'miragejs'; // Cria um servidor de API fake
import {App} from './App';

createServer ({
  routes(){ // Cria as rotas
    this.namespace = 'api'; // Define o namespace da API
    this.get('/transactions', () => { // Cria a rota transactions do tipo get e retorna um array de objetos
      return [
        {id: 1, title:'Transaction',createAt: new Date(),category: 'Lazer', type: 'deposit', amount: '30'},
        {id: 2, title:'Transaction',createAt: new Date(),category: 'Alimentação', type: 'deposit', amount: '50'},
        {id: 3, title:'Transaction',createAt: new Date(),category: 'Aluguel', type: 'withdraw', amount: '200'},
        {id: 4, title:'Transaction',createAt: new Date(),category: 'Salário', type: 'withdraw', amount: '3000'},
        {id: 5, title:'Transaction',createAt: new Date(),category: 'Vendas', type: 'withdraw', amount: '2000'},
      ]
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
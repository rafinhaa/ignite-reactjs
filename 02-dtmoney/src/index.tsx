import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model} from 'miragejs'; // Cria um servidor de API fake
import {App} from './App';

createServer ({
  // Tabela de dados
  models: {
    // Nome da tabela
    transaction: Model,  
  },
  seeds(server){ // Seed serve para popular a tabela e recebe server como parametro
    server.db.loadData({
      transactions: [ // Nome da tabela que é sempre o nome do model no plural
        { id: 1, title: 'Compra de café', amount: '10.00', type: 'withdraw', category: 'Food', createdAt: new Date('2020-01-01') },
        { id: 2, title: 'Compra de almoço', amount: '50.00', type: 'withdraw', category: 'Food', createdAt: new Date('2020-01-01') },
        { id: 3, title: 'Salário', amount: '5000.00', type: 'deposit', category: 'Food', createdAt: new Date('2020-01-01') },
        { id: 4, title: 'Compra de casa', amount: '10000.00', type: 'withdraw', category: 'Food', createdAt: new Date('2020-01-01') }
      ]
    })
  },
  routes(){ // Cria as rotas
    this.namespace = 'api'; // Define o namespace da API

    this.get('/transactions', () => { // Cria a rota transactions do tipo get e retorna um array de objetos
      return this.schema.all('transaction'); // Retorna todos os objetos da tabela transaction
    })
    
    this.post('/transactions', (schema, request) => { //schema é o banco de dados e request é o request do post
      const data = JSON.parse(request.requestBody); // Pega o corpo da requisição em texto e converte para JSON
      //Primeiro parametro é o nome da tabela e o segundo é o objeto que será inserido
      return schema.create('transaction',data); // Cria um novo objeto no banco de dados
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
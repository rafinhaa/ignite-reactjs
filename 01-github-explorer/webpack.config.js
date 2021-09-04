const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //
    entry: path.resolve(__dirname,'src','index.jsx'), //Arquivo principal da aplicação
    output: {
        path: path.resolve(__dirname,'dist'), //Pasta onde será gerado o arquivo bundle.js
        filename: 'bundle.js' //Nome do arquivo bundle.js
    },
    resolve:{
        extensions: ['.js','.jsx'] //Extensões que serão utilizadas para encontrar os arquivos
    },
    devServer:{
        static: path.resolve(__dirname, 'public'), //Pasta onde fica o arquivo HTML (conteúdo estatico)
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({ //Plugin para gerar o arquivo index.html
            template: path.resolve(__dirname,'public','index.html'), //Template que será utilizado para gerar o arquivo index.html
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/, //Expressão regular para encontrar arquivos js ou jsx
                exclude: /node_modules/, //Excluir arquivos de node_modules
                use: 'babel-loader', //Utilizar o babel-loader para transpilar o arquivo
            },
            {
                test: /\.scss$/, //Expressão regular para encontrar arquivos scss
                exclude: /node_modules/, //Excluir arquivos de node_modules
                use: ['style-loader','css-loader','sass-loader'], //Utilizar o style-loader para adicionar o css no html, o css-loader para interpretar o css e o sass-loader para interpretar o sass
            },
        ]
    }
}       
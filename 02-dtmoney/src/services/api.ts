import axios from "axios";

//Precisamos instanciar o axios porque preicamos informar configurações padrões
export const api = axios.create({ //instaciando o axios
    baseURL: "http://localhost:3000/api"
});
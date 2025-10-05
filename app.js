//Modularização (ES Modules)
import { Usuario } from "./classes.js";
import { criarItemCliente,renderizarLista } from "./utils.js";

const API_URL = "https://crudcrud.com/api/39277c2784b54611941d4daa00914ea4/clientes";
const lista = document.getElementById("listaClientes");
const btnAdd = document.getElementById("add");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");

async function carregarClientes() {
    lista.innerHTML = "";

    try{
        const resposta = await fetch(API_URL);
        const dados = await resposta.json();

        renderizarLista(dados, lista, cliente =>
            criarItemCliente(cliente, removerCliente)
        );
    }catch (erro){
        console.error("Erro ao carregar clientes:", erro);
    }
}

async function adicionarCliente() {
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();

    if(!nome || !email){
        alert("Preencha todos os campos!");
        return;
    }

    const novoUsuario = new Usuario(nome, email);

    try{
        await fetch(API_URL,{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                nome: novoUsuario.nome,
                email: novoUsuario.email
            })
        });

        inputNome.value = "";
        inputEmail.value = "";

        carregarClientes();
    }catch(erro){
        console.error("Erro ao remover cliente:",erro);
    }
}

async function  removerCliente(id){
    try{
        await fetch(`${API_URL}/${id}`,{method: "DELETE"});
        carregarClientes();
    }catch (erro){
        console.error("Erro ao remover cliente:",erro);
    }
}

btnAdd.addEventListener("click",adicionarCliente);

carregarClientes();


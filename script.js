
const clientes = document.getElementById("listaClientes");

const API_URL = "https://crudcrud.com/api/95be281491ff44e8964784fdfe54eacc/clientes"

function carregarClientes(){
    clientes.innerHTML = "";

    fetch(API_URL)
    .then(resposta => resposta.json())
    .then((listadeClientes) =>{
        listadeClientes.forEach(cliente => {
            const item = document.createElement("li");

            item.setAttribute("id",cliente._id);
            item.innerHTML = `${cliente.nome} - ${cliente.email}
                <button class="btn-remover" onclick="removeCliente('${cliente._id}')">X</button>`;
            clientes.appendChild(item);
        });
    })
    .catch(err => console.error("Erro ao salvar cliente:",err));
}

carregarClientes();

document.getElementById("add").addEventListener("click", ()=>{

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    
    fetch(API_URL, {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        }) 
    })
    .then(resposta => resposta.json())
    .then(() => {
        carregarClientes();
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
    })
    
})

function removeCliente(id){
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    }).then(() => {
        carregarClientes();
    });
}
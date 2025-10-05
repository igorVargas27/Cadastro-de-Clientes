export function criarItemCliente(cliente,removerCallback){
    const item = document.createElement("li");
    item.setAttribute("id",cliente._id);
    item.innerHTML = `${cliente.nome} - ${cliente.email}
        <button class="btn-remover" onclick="removeCliente('${cliente._id}')">X</button>`;
    
    const btn = item.querySelector(".btn-remover");
    btn.addEventListener("click",() => removerCallback(cliente._id));

    return item;
}

export function renderizarLista(lista, container, callback){
    container.innerHTML = "";
    lista.map(callback).forEach(el => container.appendChild(el));
}
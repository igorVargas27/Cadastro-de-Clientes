
# Cadastro de Clientes - CRUD com Fetch API

Este projeto é uma aplicação web simples desenvolvida para praticar o consumo de APIs utilizando **Fetch API**, manipulando requisições **GET, POST e DELETE** com a API do [CrudCrud](https://crudcrud.com/).

## 🚀 Funcionalidades
- **Cadastrar Cliente**: o usuário pode inserir um **nome** e um **e-mail** e salvar na API.
- **Listar Clientes**: todos os clientes cadastrados são exibidos na tela.
- **Excluir Cliente**: cada cliente listado possui um botão **X** vermelho que permite excluir o registro da API.

## 📂 Estrutura do Projeto
- `index.html` → Interface da aplicação (formulário + lista de clientes).
- `script.js` → Código JavaScript que interage com a API (GET, POST e DELETE).
- `style.css` → Estilos básicos para melhorar a apresentação.

## ⚙️ Tecnologias Utilizadas
- **HTML5** → Estrutura da interface.
- **CSS3** → Estilização básica.
- **JavaScript (Fetch API)** → Consumo da API CrudCrud.
- **CrudCrud API** → API temporária para testes de CRUD.

## 📋 Como Usar
1. Acesse [CrudCrud](https://crudcrud.com/) e gere uma nova URL de API (ela expira em 24h).
2. Substitua a URL no arquivo `script.js`:
   ```js
   const API_URL = "https://crudcrud.com/api/SEU_ID/clientes";
   ```
3. Abra o `index.html` em seu navegador.
4. Cadastre clientes preenchendo nome e e-mail e clique em **Salvar**.
5. Os clientes aparecerão listados abaixo, com a opção de excluir.

## 📝 Observações
- A URL da API expira após 24 horas. Sempre que expirar, gere uma nova e atualize no código.
- O projeto é apenas para fins didáticos, não sendo indicado para produção.

---
👨‍💻 Desenvolvido como prática de integração com APIs REST usando Fetch API.

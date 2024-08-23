# ToDo List Application

![Screenshot_6](https://github.com/user-attachments/assets/e2f7a6f6-54a9-4e12-9c74-6c240f5f0da5)

<h4 align="center"> 
	🚀 Aplicação de Lista de Tarefas 🚀
</h4>

## 💻 Sobre

Esta aplicação chamada **ToDo List** é uma aplicação simples para gerenciamento de tarefas. Permite ao usuário adicionar novas tarefas, listar todas as tarefas, excluir uma tarefa e marcar uma tarefa como concluída.

### Clonando e Executando

Passo a passo para clonar e executar a aplicação na sua máquina:

1. **Clone o repositório:**

   ```bash
   $ git clone https://github.com/carlossroliveira/AngularTodoList.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   $ cd todo-list
   ```

3. **Instale as dependências:**

   ```bash
   $ npm install
   ```

   ou

   ```bash
   $ yarn install
   ```

4. **Execute o projeto:**

   ```bash
   $ npm start
   ```

   ou

   ```bash
   $ yarn start
   ```

   A aplicação estará disponível em `http://localhost:4200`.

## 🛠 Tecnologias

As seguintes principais ferramentas foram usadas na construção do projeto:

- **[Angular 18](https://angular.io/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Sass](https://sass-lang.com/)**
- **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)** (Biblioteca fake para simulação de API)

## 🔧 Funcionalidades

- **Adicionar Tarefas:** Permite criar novas tarefas com título e descrição.
- **Listar Tarefas:** Exibe todas as tarefas cadastradas.
- **Excluir Tarefas:** Permite remover tarefas existentes.
- **Marcar Tarefas como Concluídas:** Permite marcar tarefas como concluídas diretamente na interface.

## 📜 Uso da Biblioteca Fake

Para simular a interação com uma API REST, estamos utilizando o [JSONPlaceholder](https://jsonplaceholder.typicode.com/), que é uma biblioteca fake que fornece endpoints para testes e desenvolvimento. Os seguintes endpoints são utilizados:

- **GET /tasks:** Retorna a lista de todas as tarefas.
- **POST /tasks:** Cria uma nova tarefa.
- **DELETE /tasks/{id}:** Exclui uma tarefa.

## 👤 Autor

**Carlos Oliveira**

- LinkedIn: [@SeuLinkedIn](https://www.linkedin.com/in/carlos-oliveira-ab93941a1/)

---

## 📝 Licença

Copyright © 2024 [Carlos Oliveira](https://github.com/carlossroliveira).<br />
Este projeto está licenciado sob a [MIT](https://opensource.org/licenses/MIT).

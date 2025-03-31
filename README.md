# Drift Board  ![Static Badge](https://img.shields.io/badge/Work%20in%20Progress-yellow?style=flat-square) ![Static Badge](https://img.shields.io/badge/study%20project-purple?style=flat-square)

Drift Board é uma aplicação web que simula um quadro Kanban, permitindo aos usuários gerenciar suas tarefas de forma eficaz e visual.

### Funcionalidades

- **Criação e Edição de Tarefas:** Adicione novas tarefas e edite as existentes conforme necessário.
- **Arrastar e Soltar:** Mova os cards de tarefas entre diferentes colunas de status (como "A Fazer", "Em Progresso" e "Concluído") com facilidade.
- **Armazenamento de Dados:** Todos os dados das tarefas são salvos em um banco de dados, garantindo que você não perca seu progresso.

  
### Tecnologias Utilizadas
- **Frontend:** React, Vite, TypeScript, TailwindCSS
- **Backend:** NodeJS com Fasfity
- **Banco de Dados:** MongoDB
- **Documentação e validação:** SwaggerUI com Zod

### Como Executar o Projeto
Siga as instruções abaixo para rodar o Drift Board localmente na sua máquina.

 1. Clonar o Repositório
Use o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/colomeramonica/drift-board
```

2. Instalar dependências
Acesse a pasta do projeto e instale as dependências:

```bash
cd drift-board  
npm install
```

3. Instalar as Dependências do Backend
Acesse o backend e instale as dependências:

```bash
cd api/  
npm install  
```

4. Executar o Projeto
Você precisará abrir dois terminais para executar o projeto:

Terminal 1:  Inicie o servidor de desenvolvimento do React:

```bash
cd drift-board  
npm run dev  
```

Terminal 2: Inicie a API do NodeJS:

```bash
cd api  
npm run dev
```

### Acessando o Drift Board
Com tudo configurado, você pode acessar a aplicação nos seguintes endereços:

**API:** http://localhost:3333

**Documentação:** API: http://localhost:3333/docs

**Frontend:** http://localhost:5173

### Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

### Licença
Este projeto está licenciado sob a MIT License.

### Contato
Para dúvidas ou sugestões, você pode entrar em contato comigo pelo colomeramonica@gmail.com

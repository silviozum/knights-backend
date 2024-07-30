
# Knights Backend

 Este projeto é o backend do sistema Knights, responsável por fornecer APIs e funcionalidades necessárias para o funcionamento do sistema.


## Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18.19.0 ou superior)
- [npm](https://www.npmjs.com/) (v10 ou superior)

### Passos

1. Adicione HOST e PORT no arquivo .env para Mongo e Redis:

    ```bash
    MONGODB_HOST=mongodb://127.0.0.1:27017/knights
    REDIS_HOST=127.0.0.1
    REDIS_PORT=6379
    ```
    
3. Instale as dependências:
    ```bash
    npm install
    ```

## Uso

### Desenvolvimento

Para iniciar o servidor em modo de produção, execute:
```bash
npm start
```

### Testes

Para executar os testes, use:
```bash
npm test
```

### Interface FrontEnd

Link para o repositório frontend https://github.com/silviozum/knights-frontend.git

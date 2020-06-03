import express, { request } from 'express';

const app = express();

app.use(express.json());
// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end 

// Request Param: Parâmetros que vem na própria rota que 
// identificam um recurso
// Query Param: Parâmetros que vem na prória rota, geralmente opcionais, 
// para filtros, paginação, etc
// Request Body: Parâmetros para criação e atualização de informações

const users = [
    'Octavio', // 0
    'Eduardo', // 1
    'Hyago',   // 2
    'José',    // 3
    'Daniel',  // 4
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    // Javascript object notation - JSON

    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    
    const usuario = users[id];

    return response.json(usuario);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email,
    };

    return response.json(user);
});

app.listen(3333);
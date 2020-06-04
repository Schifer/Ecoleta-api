import express, { request } from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);
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

app.listen(3333);
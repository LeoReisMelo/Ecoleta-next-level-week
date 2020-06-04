import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema
//Get: Buscar uma ou mais informações do back-end
//Post: Criar uma nova informação no back-end
//Put: Atualizar uma informação existente no back-end
//Delete: Deletar uma informação do back-end
//Request param: Parâmetros que vem na própria rota, que identificam um recurso
//Query Param: Parâmetros que vem na própria rota, geralmente opcionais para filtros, paginação
//Request Body: Parâmetros para criação/atualização de informações

app.listen(3333);
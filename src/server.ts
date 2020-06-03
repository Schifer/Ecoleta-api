import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários.');

    // Javascript object notation - JSON

    response.json([
        'Octavio',
        'Eduardo',
        'Hyago',
        'Eduardo',
        'José',
        'Daniel',
    ]);
});

app.listen(3333);
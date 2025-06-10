import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/health', (req, res) => {
    res.status(200).send('Backend is running');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
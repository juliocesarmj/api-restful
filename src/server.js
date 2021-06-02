const express = require('express');
//const path = require('path');
const routes = require('./routes/routes')
const db = require('./database/db')
const app = express();

db.connect()
app.use(express.urlencoded({ extended: true }));

//rotas
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Início',
  });
});
app.use('/api', routes)

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is listening on port ${port}`));

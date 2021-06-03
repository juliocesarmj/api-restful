const express = require('express');
const cors = require('cors');

const routes = require('./routes/routes');
const db = require('./database/db');

const app = express();

db.connect();
//habilitando api publica
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       let allowed = true;
//       if (!origin) allowed = true;
//       if (!allowedOrigins.includes(origin)) allowed = false;
//       callback(null, allowed);
//     },
//   }),
// );
const allowedOrigins = ['http://127.0.0.1:5500'];

app.use(
  cors({
    origin: function (origin, callback) {
      let allowed = true;

      // permite conexões sem origin. Exemplo: Mobile Apps
      if (!origin) allowed = true;

      // verifica se o origin da request consta na lista de autorizados no array allowedOrigins
      if (!allowedOrigins.includes(origin)) allowed = false;

      callback(null, allowed);
    },
  }),
);

//habilita server para receber dados no formato json
app.use(express.json());

app.use('/api', routes);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is listening on port ${port}`));

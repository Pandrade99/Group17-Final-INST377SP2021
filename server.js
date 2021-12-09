/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/jonathanRoutes.js';
import apiRoutes2 from './routes/yilingRoutes.js';
import apiRoutes3 from './routes/peterRoutes.js';
import apiRoutes4 from './routes/allyRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = 'public';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));
app.use('/api', apiRoutes);
app.use('/api', apiRoutes2);
app.use('/api', apiRoutes3);
app.use('/api', apiRoutes4);

async function bootServer() {
  try {
    // const mysql = await db.sequelizeDB;
    // await mysql.sync();
    app.listen(PORT, () => {
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();

const express = require('express');
const db = require('./models');
const cors = require('cors');
const app = express();
const userModel = require('./models/admin');

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

const corsOptions = {
  origin: 'https://localhost:8081'
};

app.use(cors(corsOptions));

db.sequelize.sync();

app.get('/', async (req, res) => {
  const data = await db.sequelize.json();
  console.log(data);
  res.json({message: 'Say hello to my little friend.'});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, async (req, res) => {
  const data = await db.sequelize.json();
  console.log(data);
  console.log(`Server funcionando na porta ${PORT}`);
});

//-------
// function getUserMiddleware (req, res, next) {
//     const { username } = req.body;

//     const user = await useModel.getUser(username);

//     if (!user) {
//         res.status(404).json({ message: 'user não encontrado' });
//     }

//     return res.status(200).jon(user);
// }
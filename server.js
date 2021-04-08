const express = require('express');
const db = require('./models');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

const corsOptions = {
  origin: 'https://localhost:8081'
};

app.use(cors(corsOptions));

db.sequelize.sync();

app.get('/', (req, res) => {
  res.json({message: 'Say hello to my little friend'})
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server funcionando na porta ${PORT}`);
});

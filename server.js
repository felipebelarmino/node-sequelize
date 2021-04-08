const express = require('express');
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

app.get('/', (req, res) => {
  res.json({message: 'Say hello to my little friend'})
});


const PORT = process.env.PORT || 8080;

// const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server funcionando na porta ${PORT}`);
});

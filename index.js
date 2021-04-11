const express = require("express");
const db = require("./models");
// const cors = require("cors");

const app = express();

// const corsOptions = {
//   origin: "https://localhost:8081",
// };

// app.use(cors);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

require("./routes/index")(app);

db.sequelize.sync(); // Força recriar as tabelas { force: true }

app.get("/", (req, res) => {
  res.json({ message: "Say hello to my little friend." });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  const data = await db.sequelize.json();
  console.log(data);
  console.log(`Server funcionando na porta ${PORT}`);
});

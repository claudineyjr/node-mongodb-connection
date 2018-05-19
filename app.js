const app = require('express')();
const { serverPort } = require('./config/config');

app.listen(serverPort, () => {
  console.log(`Servidor ouvindo na porta ${serverPort}`);
});
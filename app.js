const app = require('express')();
const { serverPort, mongoUrl, mongoClient } = require('./config/config');

mongoClient.connect(mongoUrl, (err, client) => {
  if(!err) {
    console.log('Conexão estabelecida com sucesso');
  }
  const db = client.db('mongo_tutorial');
  db.collection('participantes').find({}).toArray((err, result) => {
    result.map((participante) => console.log(participante));
  })
})

app.listen(serverPort, () => {
  console.log(`Servidor ouvindo na porta ${serverPort}`);
});
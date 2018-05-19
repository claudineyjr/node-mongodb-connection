# O que vou precisar no mongo
Com o mongoDB instalado em sua máquina ou docker vá no terminal e rode o seguinte comando

```sh
  $ mongo
  $ use mongo_tutorial
  $ db.createCollection('participantes')
  // coloque aqui o nome que deseja inserir
  $ db.participantes.insert({ "name": "Claudiney Junior" });
```
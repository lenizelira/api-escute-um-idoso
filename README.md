# Api Escute um Idoso


# A dor : 
Os idosos não terem com quem compartilhar suas experiências com outras pessoas e assim terem momentos em que possam ser ouvidos por pessoas diferentes do lar onde vivem.

# A solução: 
Uma API com lares de idosos com espaço para marcação de visitas para que os idosos possam compartilhar suas histórias e experiências. Idosos precisam conversar e compartilhar também, eu vejo idosos como verdadeiras histórias vivas e conhecimento aprofundado sobre viver. Visite um idoso e escute o que ele tem a dizer, ele passa o dia todo sozinho e precisa de momentos de compartilhamento.


### Dados para Collection Lar
* id: autogerado e obrigatório
* nomeRazao: texto e obrigatório
* CNPJ: texto e obrigatório
* endereco: texto e não obrigatório
* telefone: texto e não obrigatório


### Dados para Collection do Idoso
* id: autogerado e obrigatório
* nome: texto e obrigatório
* idade: texto e obrigatório
* sexo: texto e obrigatorio
* diaDeVisita: texto e obrigatório
* horarioDeVisita: texto e obrigatorio



### Dados para Collection do Ouvinte
* id: autogerado e obrigatório
* nome: texto e obrigatório
* telefone: texto e obrigatório
* endereco: texto e obrigatório

# Essa API contém as seguintes rotas:

 * "/" Retorna index com apresentação {"titulo":"Api Escute um Idoso","version":"1.0.0"}
 * "/lar/" Retorna todos os lares do banco de dados
 * "/lar/criar" Cria novo lar e retorna mensagem amigável
 * "/lar/atualizar/:id/" Retorna lar por id específico
 * "/lar/deletar/:id" Deleta lar por id específico e retorna mensagem amigável

 # Tecnologias
Para a consturição do projeto, as seguintes tecnologiasforam utilizadas:

* JavaScript
* Git/Github
* Node.js
* MongoDb
* Mongoose
* Nodemon
* Express
* dotenv
* cors
* heroku
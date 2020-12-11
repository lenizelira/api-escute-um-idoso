# projeto-final-reprograma
Api com  Projeto final do Bootcamp Back-End Reprograma.


==============================

# Projeto Escute um Idoso
Criar uma API Agenda para reunir lares do nosso usuário.

# Criar representação visual da sua arquitetura.

Dados para Collection Lar
id: autogerado e obrigatório
nomeRazao: texto e obrigatório
CNPJ: texto e obrigatório
endereco: texto e obrigatório
telefone: texto e obrigatório


Dados para Collection do Idoso
id: autogerado e obrigatório
nome: texto e obrigatório
idade: texto e obrigatório
sexo: texto e obrigatorio
diaDeVisita: texto e obrigatório
horarioDeVisita: texto e obrigatorio



Dados para Collection do Ouvinte
id: autogerado e obrigatório
nome: texto e obrigatório
telefone: texto e obrigatório
endereco: texto e obrigatório

# Essa API deve ter as seguintes rotas:

 "/" Retorna index com apresentação { mensagem: bem vinda a lista de contatinhos }
 "/lares/" Retorna todos os dados do banco de dados
 "/lares/criar" Cria novo lar e retorna mensagem amigável
 "**/lares/**nome/[NOME]" Retorna lar por nome específico
 "**/lares/**id/[ID]" Retorna lar por id específico
 "/lares/deletar/[ID]" Deleta lar por id específico e retorna mensagem amigável
 "/lares/atualizar/telefone/[ID]" Atualiza somente telefone do lar por id específico e retorna mensagem amigável
 "/lares/atualizar/[ID]" Atualiza completamente lar e retorna mensagem amigável (id não pode ser modificado)

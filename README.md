# challenge_GCB

## Desenvolver um sistema que faça a gestão de cadastros de médicos.
__O Sistema deve suportar as seguintes operações:__
* Insert
* Update
* Select
* Soft Delete
## No cadastro do médico devem ser cadastrados os seguintes itens abaixo:
* Nome do Médico com no máximo 120 caracteres
* CRM somente Números e no formato (00.000.00)
* Telefone Fixo
* Telefone Celular
* CEP Formatado (00000-000)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ao cadastrar o Cep deve ser feita uma requisição via XHR para a api dos correios e retornar todos os dados de endereço do cliente.
* Especialidade médica (ao mínimo duas especialidades)
#### __Itens importantes:__
* Poder realizar pesquisas por todos os campos do cadastro do médico
inclusive endereço.
* Estar em no padrão REST
* Utilizar alguma ferramenta de validação (exemplo YUP)
* Funções Especialistas (Realizam somente uma operação)
* Utilizar o Postman ou Insomina (documentação e requisição)
* GIT

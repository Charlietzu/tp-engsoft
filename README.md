# tp-engsoft

## Como rodar a aplicação
Os seguintes itens são pré-requisitos
1. NodeJS 14+
2. Docker

Antes de tudo, deve-se instalar as dependências do projeto. Portanto, navegue até a pasta raíz do projeto e execute o comando:
```bash
npm install
```

Agora, ainda na pasta raíz, caso você queira rodar a apliação em si, deve-se:
```bash
npm run start
```

O comando acima iniciará o Docker (que contém uma instância do banco de dados) e a própria aplicação em si.

Por fim, para rodar os testes, ainda na pasta raíz, devemos executar o comando:
```bash
npm run test
```


## Exemplos Payload 

Abaixo, estão alguns exemplos de requisições para o nosso sistema.

> Requisição para inserir um usuário
```bash
curl --location --request POST 'http://localhost:3000/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "role": "PATIENT",
    "name": "Guilherme"
}'
```

> Requisição para consultar todos os pacientes
```bash
curl --location --request GET 'http://localhost:3000/patients'
```

> Requisição para deletar o paciente com id = 1
```bash
curl --location --request DELETE 'http://localhost:3000/patient/1'
```

> Requição para editar médico com id = 1
```bash
curl --location --request PUT 'http://localhost:3000/doctor/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "John Johnes"
}'
```
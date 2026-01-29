1. Conectar-se ao servidor:
  ```
  mysql -h localhost -u root -p
  ```
  -h = local
  -u = usuário
  -p = senha
2. Mostrar bancos de dados:
  logseq.order-list-type:: number
  ```
  SHOW DATABASES;
  ```
3. Criar banco de dados:
  logseq.order-list-type:: number
  ```
  CREATE DATABASE nomeDoBanco;
  ```
4. Usar um banco de dados:
  logseq.order-list-type:: number
  ```
  USE nomeDoBanco;
  ```
5. Verificar tabelas:
  logseq.order-list-type:: number
  ```
  SHOW TABLES
  ```
6. Criar tabela em arquivo.sql:
  logseq.order-list-type:: number
	- Tipos de dados
		- Text
		- Char
		- Int
		- Float
		- Date
		- Blob

7. Inserir dados
```
INSRET INTO usuarios(nome, email, idade) VALUES(
    "Dudu",
    "meuemail@meudominio.com",
    28
);
```

8. Listar todos os dados da tabela:
```
SELECT * FROM nomeDaTabela
```

9. Especificar uma consulta:
```
SELECT * FROM usuarios WHERE idade = 8;

SELECT * FROM usuarios WHERE idade >= 18;
```

10. Excluir registros (linhas) de uma tabela:
```
DELETE FROM usuarios WHERE nome = "Dudu";
```

11. Editar dados de um registro:
```
UPDATE usuarios SET nome = "yati" WHERE nome = "nini";
```
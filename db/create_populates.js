/* ESTE ARQUIVO DEVE SER EXECUTADO APENAS UMA VEZ PARA QUE O BANCO SEJA CRIADO E POPULADO

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./databaseClient.sqlite');

const CLIENT_SCHEMA = `
    CREATE TABLE IF NOT EXISTS CLIENTS (
        id_client INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(64),
        email VARCHAR(64),
        password VARCHAR(64),
        cpf VARCHAR(11),
        phone VARCHAR(64),
        adress TEXT
    )
`;

const ADD_CLIENT = `
    INSERT INTO CLIENTS (
        name,
        email,
        password,
        cpf,
        phone,
        adress
    )
    VALUES 
        ('Gonçalo Zeiberg', 'gozei@teste.com', '123456', '12345678911', '21999999999', 'rua do não to sabendo n15'),
        ('Amanda das Dores', 'amado@teste.com', '123456', '12345678911', '21999999999', 'rua do não to sabendo n15'),
        ('Teutonio Taomari', 'tetao@teste.com', '123456', '12345678911', '21999999999', 'rua do não to sabendo n15')


`;

db.serialize(() => {
	db.run(CLIENT_SCHEMA, (err) => {
		if (err) {
			console.log('Erro na criação da tabela de tarefas');
			process.exit(1);
		}
	});
	db.run(ADD_CLIENT, (err) => {
		if (err) {
			console.log('Erro ao adicionar entradas ao banco' + err);
			process.exit(1);
		}
	});
});*/


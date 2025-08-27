const db = require("../db/database");

//CRIAR DB
exports.createDB = (req, res) => {
    let q = 'CREATE DATABASE bancoapi';
    db.query(q, (err, result) => {
        if(err) throw err;
        return res.status(201).json("DB created");
    })
}

//CRIAR TABELA
exports.createTable = (req, res) => {
    let q = 'CREATE TABLE usuario (idusuario int AUTO_INCREMENT, nome_usuario VARCHAR(45), email_usuario VARCHAR(45), senha_usuario VARCHAR(45), PRIMARY KEY (idusuario))';
    db.query(q, (err, result) => {
        if (err) throw err;
        return res.status(201).json("TABLE CREATED");
    });
}

//CRIAR USUARIOS
exports.createUsuario = (req, res) => {
    const q = "INSERT INTO usuario SET ?";

    const {nome_usuario, email_usuario, senha_usuario} = req.body;

    db.query(q, {nome_usuario, email_usuario, senha_usuario}, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
}

//MOSTRAR USUARIOS
exports.showUsuarios = (req, res) => {
    const q = "SELECT * FROM usuario";

    db.query(q, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
}

//MOSTRAR USUARIO UNICO
exports.showUsuarioUnico = (req, res) => {
    const q = `SELECT * FROM usuario where idusuario=${req.params.id}`;

    db.query(q, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result[0]);
    });
}

//UPDATE TODO
exports.updateUsuario = (req, res) => {
    const {nome_usuario, email_usuario, senha_usuario} = req.body;

    const q = `UPDATE usuario SET ? where idusuario=${req.params.id}`;

    db.query(q, {nome_usuario, email_usuario, senha_usuario}, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
}

//DELETE SINGLE USUARIO 
exports.deleteUsuarioUnico = (req, res) => {
    const q = `DELETE FROM usuario WHERE idusuario=${req.params.id}`;

    db.query(q, (err, result) => {
        if(err) return res.json(err);
        return res.status(200).json({data: "usuario deleted"});
    });
}
const express = require('express');
const router = express.Router();
const { createDB, createTable, createUsuario, showUsuarios, showUsuarioUnico, updateUsuario, deleteUsuarioUnico} = require('../controllers/APIController');

//ROUTES
router.get('/create/database', createDB);
router.get('/create/table', createTable);
router.post('/create/usuario', createUsuario);
router.get('/show/usuarios', showUsuarios);
router.get('/usuario/:id', showUsuarioUnico);
router.put('/update/usuario/:id', updateUsuario);
router.delete('/delete/usuario/:id', deleteUsuarioUnico);

module.exports = router;
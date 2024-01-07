"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPersona = exports.postPersona = exports.deletePersona = exports.getPersona = exports.getPersonas = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getPersonas = (req, res) => {
    connection_1.default.query('SELECT * FROM persona', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getPersonas = getPersonas;
//Persona: para buscar por id
const getPersona = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM persona WHERE id = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getPersona = getPersona;
//Para borrar Persona
const deletePersona = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM persona WHERE id = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Persona eliminada con exito'
        });
    });
};
exports.deletePersona = deletePersona;
//Post, configuracion body.
const postPersona = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO persona set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Persona agregada con exito'
        });
    });
};
exports.postPersona = postPersona;
//Put ingreso persona
const putPersona = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE persona set ? WHERE id = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Persona Actualizada con exito'
        });
    });
    // res.json({
    //     msg: "postPersona",
    //     body: body,
    //     id: id
    // })
};
exports.putPersona = putPersona;

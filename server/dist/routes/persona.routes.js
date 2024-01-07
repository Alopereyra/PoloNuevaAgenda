"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_controller_1 = require("../controllers/persona.controller");
//Para controlar los Routers de la pagina.
const router = (0, express_1.Router)();
router.get('/', persona_controller_1.getPersonas);
router.get('/:id', persona_controller_1.getPersona);
router.delete('/:id', persona_controller_1.deletePersona);
router.post('/', persona_controller_1.postPersona);
router.put('/:id', persona_controller_1.putPersona);
exports.default = router;

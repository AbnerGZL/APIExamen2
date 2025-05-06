import express from 'express';
import {deleteEv, deleteOrg, events, organicers, editEv, editOrg, event, organicer, createOrg, createEv} from "../controllers/eventos.controller.js";

const router = express.Router();

router.get('/eventos', events);
router.get('/organizadores', organicers);

router.get('/evento/:id', event);
router.get('/organizador/:id', organicer);

router.delete('/organizadores/delete/:id', deleteOrg);
router.delete('/eventos/delete/:id', deleteEv);
router.post('/evento/edit/:id', editEv);
router.post('/organizador/edit/:id', editOrg);

router.post('/organizador/create', createOrg);
router.post('/evento/create', createEv);

export default router;
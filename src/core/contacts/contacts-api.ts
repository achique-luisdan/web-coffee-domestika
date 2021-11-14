import { Router, Request, Response } from "express";

const router = Router();

router.get('/contacts', (request: Request, response: Response) => {
   response.json ({message: 'Método List Contacts'}); 
});

router.get('/contacts/:id', (request: Request, response: Response) => {
    response.json ({message: 'Método Read Contact by ID: ' + request.params.id}); 
 });

 router.post('/contacts', (request: Request, response: Response) => {
    response.json ({message: 'Método Post'}); 
 });
export default router;
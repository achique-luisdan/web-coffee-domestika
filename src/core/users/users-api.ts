import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entities/user";

const router = Router();

router.get('/users', async (request: Request, response: Response) => {
   const users = await getRepository (User).find();
   response.json (users); 
});

router.post('/users', async (request: Request, response: Response) => {
   const user = await getRepository(User).findOne (
      {'email': request.body.email}
   );
   if (user){
      getRepository (User).merge (user, request.body);
      const result = getRepository (User).save (user);
      response.json (result)
   }
   else {
      const newUser = await getRepository(User).create (
         request.body
      );
      const result = await getRepository(User).save(
         newUser
      );   
      response.json (result);
   }
});

router.get('/users/:id', async (request: Request, response: Response) => {
   const result = await getRepository(User).findOne (
      {'id': Number (request.params.id)}
   );
   response.json (result);
 });

export default router;
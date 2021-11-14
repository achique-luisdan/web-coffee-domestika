import express from 'express';
import cors from 'cors';
import routersContacts from './core/contacts/contacts-api'

const app = express();
const port = 3000;

app.use(cors());
app.use (express.json());
app.use('/api', routersContacts)

app.get('/', (req, res) => {
  res.send('Bienvenido')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

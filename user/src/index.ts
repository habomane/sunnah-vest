import express, { Request, Response } from 'express'
import { userRouter } from './routes';
import { validateSession } from './middleware';

const app = express();
const port = process.env.PORT || 3000;

app.use(validateSession)
app.use('/user', userRouter); 

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



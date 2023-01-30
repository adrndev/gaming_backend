import express from 'express'
import '@prisma/client'
import * as dotenv from 'dotenv'
import { throwError } from './utils/throwError'

const app: express.Express = express()
const port = process.env.PORT || 3000

dotenv.config()

import apiRoute from './routes/api'
app.use('/api', apiRoute);

// app.get('/', (req: express.Request, res: express.Response) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  throwError('Test message')
  console.log(`Example app listening on port ${port}`)
})
import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Hello World!',
  })
})

app.get('/api/health', async (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'ready!',
  })
})

try {
  app.listen(process.env.PORT, () => {
    console.log(`dev server running at: http://localhost:${process.env.PORT}/`)
  })
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}

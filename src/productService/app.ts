import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (_req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Hello World!!!',
  })
})

app.get('/products', async (_req: Request, res: Response) => {
  const frontendHost = process.env.FRONTEND_HOST || ''
  res.setHeader('Access-Control-Allow-Origin', ['http://localhost:3000', frontendHost, "*"])
  return res.json({
    products: [
      { id: '1', name: 'test 001' },
      { id: '2', name: 'test 002' },
    ]
  })
})

app.get('/api/health', async (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'ready!',
  })
})

try {
  app.listen(process.env.PORT, () => {
    console.log(`dev server running at: http://localhost:${process.env.PORT}`)
  })
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}

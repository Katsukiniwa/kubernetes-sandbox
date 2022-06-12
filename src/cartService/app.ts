import express, { Application, Request, Response } from 'express'
import axios from 'axios'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (_req: Request, res: Response) => {
  return res.status(200).json({
    message: 'This is cart service',
  })
})

app.get('/carts', async (_req: Request, res: Response) => {
  try {
    const result = await axios.get(`${process.env.PRODUCT_SERVICE_HOST}/products`)
    const frontendHost = process.env.FRONTEND_HOST || ''
    res.setHeader('Access-Control-Allow-Origin', ['http://localhost:3000', frontendHost, "*"])
    return res.json({
      cart: result.data
    })
  } catch (error) {
    console.error(error)
  }
})

app.get('/api/health', async (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'cart service is ready!',
  })
})

try {
  app.listen(process.env.PORT, () => {
    console.log(`cart service dev server running at: http://localhost:${process.env.PORT}`)
  })
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}

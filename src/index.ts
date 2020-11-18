import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

app.use(routes)

app.listen(3001 || process.env.PORT, () => {
  console.log('http://localhost:3001')
})

import express from 'express'

import todosRoutes from './routes/todos'

const app = express()

app.use(express.json())
app.use(todosRoutes)

const PORT = 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
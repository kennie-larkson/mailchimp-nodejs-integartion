import express from "express"
import axios from "axios"

const port = process.env.PORT || 8000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Application is running')
})

app.listen(port, () => {
    console.log(`The application is running at http://localhost:${port}`);
})
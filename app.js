import express from "express"
import cors from "cors"
import path from 'path';
import { fileURLToPath } from 'url';

import mailchimpSubscription from "./integration.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




const port = process.env.PORT || 8000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Application is running')
    
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public/signup.html')
})

app.post('/signup', (req, res) => {
    const {firstname, lastname, email} = req.body
console.log(req.body);
mailchimpSubscription(firstname, lastname, email) 
res.send({status: 'form successfully submitted'})
})

app.listen(port, () => {
    console.log(`The application is running at http://localhost:${port}`);
})
import express from 'express'
import routerProd from './routes/products.routes.js'
import routerCart from './routes/cart.routes.js'

//import path from 'path'
//import __dirname from 'path.js'

const PORT = 8080
const app = express()

app.use(express.json()) 
app.use(express.urlencoded( {extended:true}))

//Routes
app.use('/api/products', routerProd)
app.use('/api/cart', routerCart)
//app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})
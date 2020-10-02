const express = require ('express')
const bodyParser0 = require ('body-parser')
const response = require('/.network/response')
const router = require('/.network/routes')

var app = express()
app.use (bodyParser.json())
//router.get('/carrera', function(reg,res){
app.use (bodyParser.urlencoded ({extended:false} ))
router(app)


app.listen( 5000 )
console.log('LA APLICACION ESTA ESCUCHANDO EN http://localhost:5000')
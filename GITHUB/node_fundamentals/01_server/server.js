const express = require ('express')
const bodyParser0 = require ('body-parser')
const response = require('/.network/response')
const router = express.Router()

var app = express()
app.use (bodyParser.json())
//router.get('/carrera', function(reg,res){
app.use (bodyParser.urlencoded ({extended:false} ))
app.use (router)

router.get('/carrera', function(reg,res){
response.sucess(req, res, 'Lista de carreras de UPS' ,200)
    
})

router.post ('/carrera', function(reg , res){
   if (req.query.error == 'ok'){
    response.sucess(req, res,'Error al ingresar a la carrera' ,500)
}else {
    response.sucess(req, res, 'Ingreso de carrera exitoso' ,201)
  }

  })
app.use( '/app' , express.static('public'))

app.listen( 5000 )
console.log('LA APLICACION ESTA ESCUCHANDO EN http://localhost:5000')
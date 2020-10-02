const express= require('express')
const response= require('../../network/response')

const router = express.Route()


router.get('/', function(reg,res){
    response.sucess(req, res, 'Lista de docente de UPS' ,200)
        
    })
    
    router.post ('/', function(reg , res){
       if (req.query.error == 'ok'){
        response.sucess(req, res,'Error al ingresar Docente' ,500)
    }else {
        response.sucess(req, res, 'Ingreso de Docente exitoso' ,201)
      }
    
      })
   module.exports= router
    
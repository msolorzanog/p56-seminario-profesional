const express= require('express')
const response= require('../../network/response')

const router = express.Route()


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
   module.exports= router
    
const express = require('express');
const router = express.Router()
const response = require('../network/response');
const controller = require('./controller');
// router.get('/', function(req, res){
//     console.log(req.headers);
//     res.header({
//         "customHeader": "token"
//     })
//     res.send("esto es un get de raiz")
// })
router.get('/:id', async function(req, res){
  try {
    const id = req.params.id
    const product = await controller.getOne(id)
    const resMessage = {
      message: "GET One Products",
      body: product
    }
    response.success(req, res, resMessage, 200)
  } catch (err) {
    response.error(req,res,"[Network] Internal Server Error",500,err) 
  }
})
router.get('/', async function(req, res){
    let query = req.query.sort || false
    // if(param === "hola"){
    //     res.send({response: "Solo saludamos"})
    // }
    
    const products = await controller.get(query)
    const resMessage = {
      message: "GET All Products",
      body: products
    }
    // res.send(listaProductos)
    response.success(req, res, resMessage, 200)
})
router.put('/', function(req, res){
  response.success(req, res, "esto es un put de productos", 200)
})
router.patch('/:id', async function(req, res){
  try {
    let id = req.params.id
    let body = {... req.body}
    // console.log("Network Update",body);
    const productUpdated = await controller.patch(id,body)
    const resMessage = {
      message: "PATCH Producto Actualizado" + productUpdated.id,
      body: productUpdated
    }
    response.success(req, res, resMessage, 200)
  } catch (err) {
    response.error(req,res,"[Network] Internal Server Error",500,err) 
  }
})
router.delete('/:id', async function(req, res){
  try {
    let id = req.params.id
    // console.log("Network Update",body);
    const productDeleted = await controller.delete(id)
    const resMessage = {
      message: "DELETE Producto",
      body: productDeleted
    }
    response.success(req, res, resMessage, 200)
  } catch (err) {
    response.error(req,res,"[Network] Internal Server Error",500,err) 
  }
})
router.post('/', function(req, res){
    response.success(req, res, "esto es un post de productos", 200)
})
router.post('/create', async function(req, res){
  try{
    let product = {... req.body}
    // body.price = "S/." + body.price.toString()
    // console.log(`ingresar a base de datos ${JSON.stringify(body)}`);
    // res.send(body)
    const newProduct = await controller.create(product)
    const resp = {
      message: 'product created',
      body: newProduct
    }
    response.success(req, res, resp, 200)
  }catch(err){
    response.error(req,res,"[Network] Internal Server Error",500,err)
  }
})
router.delete('/', function(req, res){
    res.send("esto es un delete de raiz")
    
})

module.exports = router
const Model = require('./model');
const listaProductos = [
    {
      title:'P1',
      description:'Producto 112121',
      image:'assets/imgs/im1.jpg',
      id:'1',
      price:19.0,
    },
    {
      title:'P2',
      description:'Producto 2',
      image:'assets/imgs/im2.jpg',
      id:'2',
      price:13.0,
    },
    {
      title:'P3',
      description:'Producto 3',
      image:'assets/imgs/im3.jpg',
      id:'3',
      price:25.0,
    },
]
async function getProducts() {
    try {
      let products =  await Model.find()
      return products
    } catch (err) {
      throw new Error('[Store Error]',err)
    }
}
async function createProduct(product) {
    // listaProductos.push(product)
    // return product
    try {
      const newProduct  = new Model(product)
      return await newProduct.save()
    } catch (error) {
      throw new Error('[Store Error]',err)
    }
}
async function updateProduct(id, product) {
    try {
      const myProduct  = await Model.findOne({_id: id})
      myProduct.title = product.title || myProduct.title
      myProduct.description = product.description || myProduct.description
      myProduct.image = product.image || myProduct.image
      myProduct.price = product.price || myProduct.price
      return await myProduct.save()
    } catch (error) {
      throw new Error('[Store Error]',err)
    }
}
async function deleteProduct(id) {
    try {
      return await Model.deleteOne({_id: id})
    } catch (error) {
      throw new Error('[Store Error]',err)
    }
}
async function getOneProduct(id) {
  try{
    const findedproduct = await Model.findById(id)
    return findedproduct
  }catch(err){
    throw new Error('[Store Error]',err)
  }
}
module.exports = {
    get: getProducts,
    create: createProduct,
    getOne: getOneProduct,
    patch: updateProduct,
    delete: deleteProduct
}
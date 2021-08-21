const store = require('./store')
async function getProducts(sort) {
    try {
        const products = await store.get()
        if(sort){
            const sortedProducts = products.sort((a,b) => a.price-b.price)
            return sortedProducts
        }
        return products
        
    } catch (err) {
        throw new Error('[Controller Error]',err)
    }
}
async function updateProduct(id,product) {
    try {
        const productUpdated = await store.patch(id, product)
        return productUpdated
    } catch (err) {
        throw new Error('[Controller update Error]',err)
    }
}
async function deleteProduct(id) {
    try {
        const productDeleted = await store.delete(id)
        return true
    } catch (err) {
        throw new Error('[Controller Error]',err)
    }
}
async function createProduct(product) {
    try {
        let newProduct = product
        newProduct.date = new Date()
        const productCreated = await store.create(newProduct)
        return productCreated
    } catch (err) {
        throw new Error('[Controller Error]',err)
    }
    // const productCreated = product
    // return productCreated;
}
async function getOneProduct(id) {
    try {
        findedProduct = await store.getOne(id)
        findedProduct._doc.price = 'S/ ' + findedProduct.price
        return findedProduct
    } catch (err) {
        throw new Error('[Controller Error]',err)
    }
    // const productCreated = product
    // return productCreated;
}

module.exports = {
    get: getProducts,
    create: createProduct,
    getOne: getOneProduct,
    patch: updateProduct,
    delete: deleteProduct
}
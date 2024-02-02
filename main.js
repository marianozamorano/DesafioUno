class ProductManager {
    static Id = 1;
    constructor() {
        this.productos = [];
    }
    addProducts(nombre, descripcion, precio, imagen, code, stock) {
        const validarId = this.productos.find(item => item.code === code);

        if (validarId) {
            console.log(`Error: Ya existe un producto con el code '${code}'. No se puede agregar.`);
        } else {
            const newProductos = {
                Id: ProductManager.Id,
                nombre,
                descripcion,
                precio,
                imagen,
                code,
                stock
            };
            this.productos.push(newProductos);
            ProductManager.Id++;
            console.log(`Producto agregado según code '${code}'.`);
        }
    }
    getProducts() {
        return this.productos;
    }
    getProductById(Id) {
        return new Promise((resolve, reject) => {
            const producto = this.productos.find(item => item.Id === Id);
            if (producto) {
                resolve(producto);
                console.log(`Se encontró un producto que coincide con el Id: ${Id}`);
            } else {
                reject(`No existe el producto con el Id: ${Id}`);
            }
        })
    }
}

const productManager = new ProductManager();
productManager.addProducts("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

console.log(productManager.getProducts());

productManager.getProductById(2)
    .then(producto => console.log(producto))
    .catch(error => console.log(error))

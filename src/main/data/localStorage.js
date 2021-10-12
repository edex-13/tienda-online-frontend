const getCollection = (collection) => localStorage.getItem(collection)
const deletCollection = (collection)=>localStorage.removeItem(collection)

const saveProduct = (data) => localStorage.setItem('PRODUCTS', JSON.stringify(data));

const getProduct = (id) => {
	const products = JSON.parse(getCollection('PRODUCTS'))
	return products.find(product => product.idProduct == id)
}

const increaseQuantity = (id) => {
	const products = JSON.parse(getCollection('PRODUCTS'))
	products.map(product => {
		if (product.idProduct == id) {
			product.amount += 1;
		}
	})
	return products;
}
const decreaseQuantity = (id) => {
	const products = JSON.parse(getCollection('PRODUCTS'))
	products.map(product => {
		if (product.idProduct == id) {
			product.amount == 0 ? 0 : product.amount - 1;
		}
	})
	return products;
}


export  {
  getCollection,
  deletCollection,
  getProduct,
  saveProduct,
  increaseQuantity,
  decreaseQuantity
}
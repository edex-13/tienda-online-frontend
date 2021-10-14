const getCollection = (collection) => localStorage.getItem(collection)
const deletCollection = (collection)=>{
	if(getCollection(collection)){
		localStorage.removeItem(collection)
	}else{
		alert('Error')
	}
}

const saveProduct = (data) => localStorage.setItem('PRODUCTS', JSON.stringify(data));

const addProduct = (product)=>{
	const collection = JSON.parse(getCollection('PRODUCTS'))
	collection.push(product)
	saveProduct(collection)
}

const getProduct = (id) => {
	const products = JSON.parse(getCollection('PRODUCTS'))
	return products.find(product => product.idProduct == id)
}

const increaseQuantity = (id) => {
	if(getProduct(id)){
		const products = JSON.parse(getCollection('PRODUCTS'))
		products.map(product => {
			if (product.idProduct == id) {
				product.amount += 1;
			}
		})
		saveProduct( products);
	}else{
		alert('Error')
	}
}
const decreaseQuantity = (id) => {
	if(getProduct(id)){
		const products = JSON.parse(getCollection('PRODUCTS'))
		products.map(product => {
			if (product.idProduct == id) {
				product.amount = product.amount <= 1 ? 1 : product.amount - 1;
			}
		})
		saveProduct( products);
	}else{
		alert('Error')
	}
}

const updatePriceOfAProduct=(id)=>{
	if(getProduct(id)){
		const products = JSON.parse(getCollection('PRODUCTS'))
		products.map(product => {
			if (product.idProduct == id) {
				product.priceTotal = product.amount * product.priceProduct;
			}
		})
		saveProduct( products);
	}

}
export  {
  getCollection,
  deletCollection,
  getProduct,
  saveProduct,
  increaseQuantity,
  decreaseQuantity,
	addProduct,
	updatePriceOfAProduct
}
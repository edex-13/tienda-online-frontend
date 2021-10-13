const getCollection = (collection) => localStorage.getItem(collection)
const deletCollection = (collection)=>{
	if(getCollection(collection)){
		localStorage.removeItem(collection)
	}else{
		alert('Error')
	}
}

const saveProduct = (data) => localStorage.setItem('PRODUCTS', JSON.stringify(data));

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
				product.amount == 0 ? 0 : product.amount - 1;
			}
		})
		saveProduct( products);
	}else{
		alert('Error')
	}
}


export  {
  getCollection,
  deletCollection,
  getProduct,
  saveProduct,
  increaseQuantity,
  decreaseQuantity
}
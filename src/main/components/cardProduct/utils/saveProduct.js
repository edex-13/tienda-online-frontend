const saveProduct = (data) => localStorage.setItem('PRODUCTS', JSON.stringify(data));

const getCollection = (collection) => localStorage.getItem(collection)

const getProduct = (id) => {
	const products = JSON.parse(getCollection('PRODUCTS'))
	return products.find(product => product.idProduct == id)
	// console.log(products.indexOf(a))
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


export default (product) => {
	const data = {
		...product,
		amount: 1,
	};
	const collectionExists = JSON.parse(getCollection('PRODUCTS'))
	if (collectionExists) {
		const productExists = getProduct(product.idProduct)
		if (productExists) {
			saveProduct(increaseQuantity(product.idProduct))
		} else {
			const collection = JSON.parse(getCollection('PRODUCTS'))
			collection.push(data)
			saveProduct(collection)
		}
	}
	else {
		saveProduct([data]);
	}
};

import { getProduct, getCollection, saveProduct, increaseQuantity } from 'data/localStorage';

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

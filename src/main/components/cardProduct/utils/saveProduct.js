import { getProduct, getCollection, saveProduct, increaseQuantity ,addProduct} from 'data/localStorage';

export default (product) => {
	const data = {
		...product,
		amount: 1,
	};
	const collectionExists = JSON.parse(getCollection('PRODUCTS'))
	if (collectionExists) {
		const productExists = getProduct(product.idProduct)
		if (productExists) {
			increaseQuantity(product.idProduct)
		} else {
			addProduct(data)
		}
	}
	else {
		saveProduct([data]);
	}
};

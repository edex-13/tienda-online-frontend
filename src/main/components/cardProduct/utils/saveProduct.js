const increaseQuantity = (idProduct , product)=>{
  product.amount +=  1
	localStorage.setItem(idProduct, JSON.stringify(product));
}

const saveProduct = (product) => {
	const data = {
		...product,
		amount: 1,
	};

  const getProduct = ()=> localStorage.getItem(product.idProduct)
	if (getProduct()) {
		const dataProduct = JSON.parse(getProduct());
    increaseQuantity(product.idProduct, dataProduct )
	} else {
		localStorage.setItem(product.idProduct, JSON.stringify(data));
	}
};
export default saveProduct;

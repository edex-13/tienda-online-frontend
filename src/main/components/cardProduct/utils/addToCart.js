import saveProduct_Localstorage from './saveProduct';
const $cardsProducts = document.querySelector('.cards-products');

$cardsProducts.addEventListener('click', ({target}) => {
	const isButtonForAddToCart =
		target && target.tagName == 'BUTTON' && target.classList.contains('btn_addToCart');
	if (isButtonForAddToCart) {
		const $cardProduct = target.closest('.card-product');
		const idProduct = $cardProduct.id;
		const imageProduct = $cardProduct.querySelector('.image_product').src;
		const titleProduct = $cardProduct.querySelector('.title_product').textContent;
		const descriptionProduct = $cardProduct.querySelector('.description_product').textContent;
		const priceProduct = $cardProduct.querySelector('.price_product').textContent;

    const product = {
      idProduct,
      imageProduct,
      titleProduct,
      descriptionProduct,
      priceProduct,

    }
    saveProduct_Localstorage(product)
	}
	return false;
});

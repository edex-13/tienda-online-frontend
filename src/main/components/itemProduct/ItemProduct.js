import imagesMinus from 'images/minus.svg';
import imagesPlus from 'images/plus.svg';
const ItemProduct = (product) => {
	const { idProduct, titleProduct, imageProduct, priceProduct, amount } = product;

	const $itemProduct = document.createElement('div');
	$itemProduct.classList.add('modal-item');
	$itemProduct.id = idProduct;

	const $itemProduct_info = document.createElement('div');
	$itemProduct_info.classList.add('modal-item-info');

	const $imageProduct = document.createElement('img');
	$imageProduct.src = imageProduct;
	$imageProduct.alt = titleProduct;
	$imageProduct.title = titleProduct;

	const $itemProduct_infoText = document.createElement('div');
	$itemProduct_infoText.classList.add('modal-item-info-text');

	const $titleProduct = document.createElement('p');
	$titleProduct.textContent = titleProduct;

	const $priceProductContent = document.createElement('p');
	$priceProductContent.classList.add('price')
	$priceProductContent.textContent = 'Precio: $'

	const $priceProduct = document.createElement('span');
	$priceProduct.classList.add('price_value')
	$priceProduct.textContent = priceProduct;



	const $itemProduct_quantity = document.createElement('div');
	$itemProduct_quantity.classList.add('modal-item-quantity');

	const $btn_minusQuantity = document.createElement('button');
	$btn_minusQuantity.classList.add('btn-transition', 'minus');
	$btn_minusQuantity.title = 'Disminuir la cantidad del producto';

	const $amountProduct = document.createElement('p');
	$amountProduct.classList.add('quantity')
	$amountProduct.textContent = amount;

	const $btn_plusQuantity = document.createElement('button');
	$btn_plusQuantity.classList.add('btn-transition', 'plus');
	$btn_plusQuantity.title = 'Aumentar la cantidad del producto';

	$priceProductContent.append($priceProduct)
	$itemProduct_infoText.append($titleProduct, $priceProductContent)
	$itemProduct_info.append($imageProduct, $itemProduct_infoText)


	$itemProduct_quantity.append($btn_minusQuantity, $amountProduct, $btn_plusQuantity)

	$itemProduct.append($itemProduct_info, $itemProduct_quantity)

	return $itemProduct;
}

export default ItemProduct
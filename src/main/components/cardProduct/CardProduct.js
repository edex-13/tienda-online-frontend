const createContainerProductInfo = (title , price) => {
	const $titleProduct = document.createElement('h2');
	$titleProduct.classList.add('card-product__title');
	$titleProduct.textContent = title;

	const $priceProduct = document.createElement('p');
	$priceProduct.classList.add('card-product__price');
	$priceProduct.textContent = price;

	return [$titleProduct, $priceProduct];
};


const CardProduct = (product) => {
	const {title,description, routeImage , price} = product;

	const $cardProduct_container = document.createElement('div');
	$cardProduct_container.classList.add('card-product');

	const $imageProduct = document.createElement('img');
	$imageProduct.src = routeImage;
	$imageProduct.alt = title;
	$imageProduct.title = title;

	const $cardProduct_info = document.createElement('div');
	$cardProduct_info.classList.add('card-product__info');

	const $container_ProductInfo = document.createElement('div');
	$container_ProductInfo.classList.add('container-product-info');

	const $text_descriptionProduct = document.createElement('p');
	$text_descriptionProduct.classList.add('card-product__description');
	$text_descriptionProduct.textContent = description;

  const $btn_AddToCart = document.createElement('button');
	$btn_AddToCart.classList.add('btn', 'btn-secondary');
	$btn_AddToCart.title = 'Agregar al carrito';
	$btn_AddToCart.textContent = 'Agregar al carrito';

  const child = createContainerProductInfo(title , price)
  $container_ProductInfo.append(...child)
  $cardProduct_info.append($container_ProductInfo,$text_descriptionProduct,$btn_AddToCart)
  $cardProduct_container.append($imageProduct,$cardProduct_info)
  
  return $cardProduct_container;
};

export default CardProduct
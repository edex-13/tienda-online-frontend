import getData from 'data/API/getData';

import CardProduct from 'components/cardProduct/CardProduct';
import templateNoProducts from 'components/templates/noProducts';

const $container = document.querySelector('#cards-products');

const routes = async (route) => {
	const products = await getData(route.search);
  console.log(products)
	if (products.length != 0) {
		const nodeProducts = [];
		products.forEach((product) => {
			const node = CardProduct(product);
			nodeProducts.push(node);
		});
		$container.append(...nodeProducts)
	}else{
    $container.innerHTML =  templateNoProducts('No hay productos Disponibles')
    $container.classList.remove('cards-products')
  }
};

export default routes;

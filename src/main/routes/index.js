import getData from 'data/API/getData';

import CardProduct from 'components/cardProduct/CardProduct';

const routes = async (route) => {
	const products = await getData(route.search);
  return products
}

export default routes;

import getData from 'data/API/getData';

import CardProduct from 'components/cardProduct/CardProduct';

const routes = async (route) => {
	const products = await getData(route.search);
  const nodeProducts = []
  products.forEach(product => {
    const node = CardProduct(product)
    nodeProducts.push(node)
  });
  return nodeProducts
}

export default routes;

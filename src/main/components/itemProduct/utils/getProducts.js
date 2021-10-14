import { getCollection } from 'data/localStorage';
import ItemProduct from '../ItemProduct';

const getProducts = () => {
  const products = JSON.parse(getCollection('PRODUCTS'))
  if (products) {
    const array = products.map((product) => {
      return ItemProduct(product)
    })
    return array;
  }
}

export default getProducts;
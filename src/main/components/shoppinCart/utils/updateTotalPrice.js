import { getCollection } from 'data/localStorage';
const $total_price = document.querySelector('#total_price')

const updateTotalPrice =()=>{
  const products = JSON.parse(getCollection('PRODUCTS'))
  const price = products.reduce((totalPrice , {priceTotal})=>{
    return totalPrice + priceTotal
  },0)
  $total_price.textContent = price;
} 

export default updateTotalPrice
import { getCollection } from 'data/localStorage';
const $amount = document.querySelector('#amount')
const updateAmount = ()=>{
  const quantityOfProducts = JSON.parse(getCollection('PRODUCTS')).length
  $amount.textContent = quantityOfProducts
}

export default updateAmount;
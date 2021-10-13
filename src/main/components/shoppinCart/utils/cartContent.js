import { getCollection } from 'data/localStorage';
import templateNoProducts from 'components/templates/noProducts';
import nodeProduts from 'components/itemProduct/utils/getProducts';

const $modal_body = document.querySelector('.modal-body')

const cartContent = () => {
  const areThereProducts = JSON.parse(getCollection('PRODUCTS'))
  $modal_body.innerHTML = ""
  if (areThereProducts) {
    $modal_body.append(...nodeProduts())
  } else {
    $modal_body.innerHTML = templateNoProducts()
  }
}

export default cartContent;
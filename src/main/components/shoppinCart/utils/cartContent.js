import { getCollection } from 'data/localStorage';
import templateNoProducts from 'components/templates/noProducts';
import nodeProduts from 'components/itemProduct/utils/getProducts';

const $modal_body = document.querySelector('.modal-body')
const $btn_empty = document.querySelector('#btn_empty')

const cartContent = () => {
  const areThereProducts = JSON.parse(getCollection('PRODUCTS'))
  $modal_body.innerHTML = ""
  if (areThereProducts) {
    $modal_body.append(...nodeProduts())
    $modal_body.classList.remove('noProducts')
    $btn_empty.classList.remove('hidden')
  } else {
    $modal_body.innerHTML = templateNoProducts()
    $modal_body.classList.add('noProducts')
    $btn_empty.classList.add('hidden')
  }
}

export default cartContent;
import {openModal,closeModal} from'actions/openModal';
import updateCarContent from './utils/cartContent';
import emptyCart from './utils/empty';
import updateAmount from './utils/updateAmount';
import updateTotalPrice from './utils/updateTotalPrice';
import modifyQuantity from 'components/itemProduct/utils/modifyQuantity';

const $btn_activeModal = document.querySelector('#openModal');
const $btn_closeModal = document.querySelector('.close-modal');
const $modal_body = document.querySelector('.modal-body')
const $btn_empty = document.querySelector('#btn_empty')

$btn_activeModal.addEventListener('click', () => {
	openModal()
  updateCarContent()
  updateAmount()
  updateTotalPrice()
});

$btn_closeModal.addEventListener('click', () => {
  closeModal()
});

$modal_body.addEventListener('click', (event)=>{
  modifyQuantity(event)
})

$btn_empty.addEventListener('click', ()=>{
  emptyCart()
})
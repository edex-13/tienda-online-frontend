import {openModal,closeModal} from'actions/openModal';
import updateCarContent from './utils/cartContent';

const $btn_activeModal = document.querySelector('#openModal');
const $btn_closeModal = document.querySelector('.close-modal');

$btn_activeModal.addEventListener('click', () => {
	openModal()
  updateCarContent()
});

$btn_closeModal.addEventListener('click', () => {
  closeModal()
});
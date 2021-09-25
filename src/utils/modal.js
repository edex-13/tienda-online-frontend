const $modal = document.querySelector('.modal');
const $body = document.querySelector('body');
const $btn_activeModal = document.querySelector('#openModal');
const $btn_closeModal = document.querySelector('.close-modal');

$btn_activeModal.addEventListener('click', () => {
	$modal.classList.add('active');
  $body.classList.add('no-scroll');
});
$btn_closeModal.addEventListener('click', () => {
  $modal.classList.remove('active');
  $body.classList.remove('no-scroll');
});
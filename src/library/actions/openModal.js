const $modal = document.querySelector('.modal');
const $body = document.querySelector('body');


const openModal = () => {
  $modal.classList.add('active');
  $body.classList.add('no-scroll');
}


const closeModal = () => {
$modal.classList.remove('active');
$body.classList.remove('no-scroll');
}

export  {
  openModal,
  closeModal
}
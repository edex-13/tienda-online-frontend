import 'styles/app.scss';
import 'actions/openModal';
import 'components/cardProduct/utils/addToCart';

import 'components/shoppinCart/index';

import routres from 'routes/index';


const container = document.querySelector('#cards-products');


window.addEventListener('load', async(event) => {
	const nodeProducts =await routres(location)
	container.append(...nodeProducts)
});
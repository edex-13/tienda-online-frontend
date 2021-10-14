import 'styles/app.scss';
import 'actions/openModal';
import 'components/cardProduct/utils/addToCart';

import 'components/shoppinCart/index';

import CardProduct from 'components/cardProduct/CardProduct';

const dsjd = document.querySelector('#cards-products');
const data = {
	id: '1243',
	title: 'Tomate',
	description: 'Un rico tomate traido desde los cielos para ti.',
	routeImage: 'https://agroactivocol.com/wp-content/uploads/2020/07/Tomate-Lancero.jpg',
	price: 120,
};
dsjd.append(CardProduct(data));
dsjd.append(
	CardProduct({
		id: '1244',
		title: 'Pera',
		description: 'Un rico tomate traido desde los cielos para ti.',
		routeImage: 'https://perfumesyfragancias.online/wp-content/uploads/2018/10/poire.jpg',
		price: 100,
	})
);

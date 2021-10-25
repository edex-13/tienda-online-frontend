import 'styles/app.scss';
import 'actions/openModal';
import 'components/cardProduct/utils/addToCart';

import 'components/shoppinCart/index';

import routes from 'routes/index';
import paramsQuery from 'routes/paramsQuery';


const $searchInputs = [...document.querySelectorAll('.search_btn')]

window.addEventListener('load', async(event) => {
	await routes(location)
});

$searchInputs.forEach(searchInput =>{
	searchInput.addEventListener('click', (e)=>{
		const $container = e.path[2]
		const param =  $container.querySelector('input').value
		paramsQuery(param)
	})
})
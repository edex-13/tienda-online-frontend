import 'styles/app.scss';
import 'actions/openModal'
import CardProduct from'components/cardProduct/CardProduct'

const dsjd = document.querySelector('#cards-products')
const data = {
  title:"Tomate",
  description:"Un rico tomate traido desde los cielos para ti.",
  routeImage:"https://agroactivocol.com/wp-content/uploads/2020/07/Tomate-Lancero.jpg",
  price:120
}
dsjd.append(CardProduct(data))
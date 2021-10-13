import { increaseQuantity ,decreaseQuantity } from 'data/localStorage';
import updateCarContent from 'components/shoppinCart/utils/cartContent';
const modifyQuantity = ({target}) => {
	const isAQuantitButton = target.tagName == 'BUTTON' && target.classList.contains('btn-transition');

	if (isAQuantitButton) {
		const isButtonMinus = target.classList.contains('minus');
		const isButtonPlus = target.classList.contains('plus');
    const idProduct = target.closest('.modal-item').id;
		if (isButtonMinus) {
			decreaseQuantity(idProduct)
		} else if (isButtonPlus) {
			increaseQuantity(idProduct)
		}
    else{
      return false
    }
		updateCarContent()
	}
};

export default modifyQuantity;

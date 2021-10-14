import { deletCollection } from 'data/localStorage';
import updateCarContent from './cartContent';

const empty = ()=>{
  deletCollection('PRODUCTS')
  updateCarContent()
} 

export default empty;
import imgNoProducts from 'images/noProducts.png'

const noProducts = (title)=>{
  const textDefault = 'Tu canasta está vacía. Agrega productos';
  const view = `
  <div class="noProducts">
    <img src="${imgNoProducts}" alt="No hay productos en el carrito" />
    <p>${title?title:textDefault}</p>
  </div>
  `
  return view;
}

export default noProducts
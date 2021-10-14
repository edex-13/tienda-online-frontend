import imgNoProducts from 'images/noProducts.png'

const noProducts = ()=>{
  
  const view = `
  <div class="noProducts">
    <img src="${imgNoProducts}" alt="No hay productos en el carrito" />
    <p>Tu canasta está vacía. Agrega productos</p>
  </div>
  `
  return view;
}

export default noProducts
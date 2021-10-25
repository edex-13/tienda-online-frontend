const API = `https://api-tiendaonline.herokuapp.com/products/`

const getData  = async(title)=>{
    let apiURL = title? `${API}/search${title}`: API
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        if(!data.error && data.status === 200){
          return data.message;
        }
        throw 'Error al traer los datos'
    } catch(error){
        console.log('Fetch error' , error)
    }
}
export default getData;
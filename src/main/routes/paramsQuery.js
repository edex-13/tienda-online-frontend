const paramsQuery = (param)=>{
  if(param ){
    if(param.length >= 2){
      location.href = `${location.origin}?title=${param}`;
    }else{
      alert('La busqueda debe de tener mas de 2 caracteres')
    }
  }else{
    location.href = `${location.origin}`;
  }
}
export default paramsQuery
import './styles/app.scss'
const a = 1;
const b = 2;
console.log(a + b);

window.onpopstate = function(event) {
  alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};
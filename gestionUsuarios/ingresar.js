function guardar() {
    var _ced = document.getElementById("ced").value;
    var _nom = document.getElementById("nom").value;
    var _ema = document.getElementById("ema").value;
    var _usu = document.getElementById("usu").value;
    var _con = document.getElementById("con").value;

    var fila = "<tr><td>" + _ced + "</td><td>" + _nom + "</td><td>" + _ema + "</td><td>" + _usu + "</td><td>" + _con +"</td></tr>";

    var btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("tablita").appendChild(btn);
  
}
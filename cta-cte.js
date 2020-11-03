document.getElementById("balance").value = 0;
var total = document.getElementById("balance").value;

function depositar() {
  var importa = document.getElementById("importe").value; 
  if (confirm("Esta seguro de realizar esta operacion?")) {
    if (importa > 0) {
      total += parseInt(importa);
      AgregarFila(importa, total, "text-success");
      modificarTotal(total);
    } else {
      alert("El valor debe ser mayor a 0.");
    }
  }
}

function extraer() {
  var importa = document.getElementById("importe").value;
  if (confirm("Esta seguro de realizar esta operacion?")) {
    if (importa > 0 && total>=importa) {
      total -= parseInt(importa);
      AgregarFila(importa, total, "text-danger");
      modificarTotal(total);
    } else {
    if(total<importa){
        alert("El valor es invalido.")
    }else{
        alert("El valor debe ser mayor a 0.");
    }
    }
  }
}

function AgregarFila(importa, total, clase) {
  var tabla = document.getElementById("tabla");
  var nrofila = tabla.getElementsByTagName("tr").length;

  let fila = tabla.insertRow();
  tabla.className = "table table-striped table-bordered";

  var celda1 = fila.insertCell(0);
  var celda2 = fila.insertCell(0);
  var celda3 = fila.insertCell(0);

  celda1.innerHTML = "$" + total;
  celda2.innerHTML = "$" + importa;
  celda2.className = clase;
  celda3.innerHTML = dia();
}

function dia() {
  var f = new Date();
  fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
  return fecha;
}

/*function balance(importe, importeTot, operacion) {
  importeTot = parseInt(importeTot);
  if (operacion === "suma") {
    importeTot += importe.value;
  } else {
    importeTot -= importe.value;
  }
  alert(importeTot);
  modificarTotal(importeTot);
  return importeTot;
}*/

function modificarTotal(importe) {
  document.getElementById("balance").innerHTML = "$" + importe;
}

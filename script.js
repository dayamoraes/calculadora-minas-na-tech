function calcularValorHora(){
  
  var nome = document.getElementById('input-nome').value;
  var salarioMes = Number(document.querySelector('.input-salarioMes').value);
  var diasSemanas = Number(document.getElementsByName('input-dia-semana')[0].value);
  var horasDia = Number(document.getElementsByClassName('questionario')[3].value);


  //sdufshdui dshiud
  var nSemanas = 4;
  var gastoComLanche = 150;

  var diasMes = nSemanas * diasSemanas;
  var horasTrabalhadasMes = diasMes * horasDia;

  var salarioHora = salarioMes / horasTrabalhadasMes;
  var horasTrabalhadasParaGastos = gastoComLanche / salarioHora;

  document.querySelector('#nome').innerHTML = nome
  document.getElementById('valor').innerHTML = salarioHora.toFixed(2)
  document.getElementsByTagName('span')[2].innerHTML = horasTrabalhadasParaGastos.toFixed(0);
  document.getElementById('chunda').classList.remove('invisivel')

}

//shdfuisd hui
//husidh fsuidfhsudifhsu huisd fhsudfhsu
//aaaaaaaaaaaa

// eu tenho uma xicara!!


function calcular() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let result = 0.00;

    if(peso === '')
        document.getElementById('err').innerHTML = "Peso não pode ser vazio";
    else if(altura === '')
        document.getElementById('err').innerHTML = "Altura não pode ser vazio";
    else if(altura === '' && peso === '') 
        document.getElementById('err').innerHTML = "Peso e altura não podem ser vazios";
    else{
        result = parseFloat(peso) / (parseFloat(altura)*parseFloat(altura));
    }

    peso = '';
    altura = '';
    console.log(result)
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('./service-worker.js')
    .then(function(reg) {
        console.log('Service worker Registered');
    })
    .catch(function (err) {
        console.log('erro', err);
    });
}
function final(){
    if(document.getElementById('dia').value == ''| document.getElementById('local').value == ''){
        document.getElementById('errado').innerHTML = 'Preencha os campos';
    }
    else{
        console.log('sim')
        localStorage.setItem("dia", document.getElementById('dia').value);
        localStorage.setItem("local", document.getElementById('local').value);
    window.location = 'pedido_feito.html'; 
    }
}

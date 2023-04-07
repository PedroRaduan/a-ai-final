console.log('oi');
function enviar(){
    if(document.getElementById('pri').value == ''| document.getElementById('sec').value == ''){
        document.getElementById('errado').innerHTML = 'Preencha os campos';
    }
    else{
        console.log('sim')
        localStorage.setItem("Primeiro_nome", document.getElementById('pri').value);
        localStorage.setItem("Sobrenome", document.getElementById('sec').value);
    window.location = 'pedido.html'; 
    }
      
}
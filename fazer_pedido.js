document.getElementById('nome_tamanho').innerHTML = localStorage.getItem("Tamanho");
var txt1 = 0;
var txt2 = 0;
var txt3 = 0;
var txt4 = 0;
var txt5 = 0;
var txt6 = 0;
var qtd = 1;
console.log(txt1);

function finalizar(){
    localStorage.setItem('leite_condensado', txt1);
    localStorage.setItem('leite_ninho', txt2);
    localStorage.setItem('nutella', txt3);
    localStorage.setItem('granola', txt4);
    localStorage.setItem('banana', txt5);
    localStorage.setItem('morango', txt6);
    localStorage.setItem('qtds', qtd);
    window.location = 'final.html';
}

function add1(){
    if(txt1 >= 3){
        console.log('');
    }
    else{
        txt1 = txt1 + 1;
        document.getElementById('txt1').innerHTML = txt1;
    }
}

function add2(){
    if(txt2 >= 3){
        console.log('');
    }
    else{
        txt2 = txt2 + 1;
        document.getElementById('txt2').innerHTML = txt2;
    }
}

function add3(){
    if(txt3 >= 3){
        console.log('');
    }
    else{
        txt3 = txt3 + 1;
        document.getElementById('txt3').innerHTML = txt3;
    }
}

function add4(){
    if(txt4 >= 3){
        console.log('');
    }
    else{
        txt4 = txt4 + 1;
        document.getElementById('txt4').innerHTML = txt4;
    }
}

function add5(){
    if(txt5 >= 3){
        console.log('');
    }
    else{
        txt5 = txt5 + 1;
        document.getElementById('txt5').innerHTML = txt5;
    }
}

function add6(){
    if(txt6 >= 3){
        console.log('');
    }
    else{
        txt6 = txt6 + 1;
        document.getElementById('txt6').innerHTML = txt6;
    }
}

function mais(){
    qtd = qtd + 1;
    document.getElementById('qtd_acai').innerHTML = qtd;
    document.getElementById('menos').style.opacity = 100;
}

function menos(){
    if(qtd == 1){
        console.log('');
    }
    else{
        qtd = qtd - 1;
        document.getElementById('qtd_acai').innerHTML = qtd;
    }
}



function mn1(){
    if(txt1 <= 1){
        document.getElementById('txt1').innerHTML = '';
        txt1 = 0;
    }
    else{
        txt1 = txt1 -1;
        document.getElementById('txt1').innerHTML = txt1;
    }
}

function mn2(){
    if(txt2 <= 1){
        document.getElementById('txt2').innerHTML = '';
        txt2 = 0;
    }
    else{
        txt2 = txt2 -1;
        document.getElementById('txt2').innerHTML = txt2;
    }
}

function mn3(){
    if(txt3 <= 1){
        document.getElementById('txt3').innerHTML = '';
        txt3 = 0;
    }
    else{
        txt3 = txt3 -1;
        document.getElementById('txt3').innerHTML = txt3;
    }
}

function mn4(){
    if(txt4 <= 1){
        document.getElementById('txt4').innerHTML = '';
        txt4 = 0;
    }
    else{
        txt4 = txt4 -1;
        document.getElementById('txt4').innerHTML = txt4;
    }
}

function mn5(){
    if(txt5 <= 1){
        document.getElementById('txt5').innerHTML = '';
        txt5 = 0;
    }
    else{
        txt5 = txt5 -1;
        document.getElementById('txt5').innerHTML = txt5;
    }
}

function mn6(){
    if(txt6 <= 1){
        document.getElementById('txt6').innerHTML = '';
        txt6 = 0;
    }
    else{
        txt6 = txt6 -1;
        document.getElementById('txt6').innerHTML = txt6;
    }
}

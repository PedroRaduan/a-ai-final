const firebaseConfig = {
    apiKey: "AIzaSyBuS_20Z932KWLgGxsv4NRD25bBu29o5EU",
    authDomain: "acai-4ee7e.firebaseapp.com",
    databaseURL: "https://acai-4ee7e-default-rtdb.firebaseio.com",
    projectId: "acai-4ee7e",
    storageBucket: "acai-4ee7e.appspot.com",
    messagingSenderId: "632911066784",
    appId: "1:632911066784:web:24ef79d590499605623bc5"
  };
  
nome = localStorage.getItem('Primeiro_nome') + ' '+ localStorage.getItem('Sobrenome');
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
console.log(nome);
  firebase.database().ref('/').child(nome).update({
    Dia: localStorage.getItem('dia'),
    Local: localStorage.getItem('local'),
    Tamanho: localStorage.getItem('Tamanho'),
    Quantidade: localStorage.getItem('qtds'),
    Leite_condensado: localStorage.getItem('leite_condensado'),
    Leite_ninho: localStorage.getItem('leite_ninho'),
    nutella: localStorage.getItem('nutella'),
    granola: localStorage.getItem('granola'),
    morango: localStorage.getItem('morango'),
    banana: localStorage.getItem('banana')
});
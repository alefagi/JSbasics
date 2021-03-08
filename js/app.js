let num = 0;


document.getElementById('number').innerHTML = num;


document.getElementById('bottone1').addEventListener('click',
function(){
  document.getElementById('number').innerHTML = --num;
})


document.getElementById('bottone2').addEventListener('click',
function(){
  document.getElementById('number').innerHTML = ++num;
})

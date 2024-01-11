const btn = document.querySelector('.check');
var heightVal = document.querySelector('.value');

const valueNum = document.querySelector('.inputVal');

var numChange = valueNum.value;



btn.addEventListener('click' , () => {

   var data =  heightVal.style.height = `${valueNum.value}%`;
               valueNum.value = ''
})
const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click", function() {
    alert("Sabia que ibas a decir que si uwu")
} );

const noBtn= document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
const ramdomX = parseInt(Math.random()+100);
const ramdomY= parseInt(Math.random()*100);
noBtn.style.setProperty( 'top', ramdomY+'%');
noBtn.style.setProperty('left', ramdomX+'%');
noBtn.style.setProperty('transform',`translate(-${ramdomX} -${ramdomY}%)`);

})
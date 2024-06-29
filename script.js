/* Script for parallax effect */

let img1=document.getElementById('img1');
let img2=document.getElementById('img2');
let img3=document.getElementById('img3');
let img4=document.getElementById('img4');
let img5=document.getElementById('img5');
let img6=document.getElementById('img6');
let img7=document.getElementById('img7');
let img8=document.getElementById('img8');

window.addEventListener('scroll', showEffect);

function showEffect(){
    var value=window.scrollY;
    img1.style.left=value*0.15+'px';
    img2.style.left=value*0.1+'px';
    img3.style.left=value*0.08+'px';
    img7.style.left=value*0.07+'px';
    

    img4.style.right=value*0.15+'px';
    img5.style.right=value*0.1+'px';
    img6.style.right=value*0.08+'px';
    img8.style.right=value*0.07+'px';
    
}
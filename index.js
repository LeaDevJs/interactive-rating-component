const circle1= document.getElementById("circle1")
const circle2= document.getElementById("circle2")
const circle3= document.getElementById("circle3")
const circle4= document.getElementById("circle4")
const circle5= document.getElementById("circle5")
let number;
function handleSelect1(){
    circle1.classList.add("select");
    circle2.classList.remove("select");
    circle3.classList.remove("select");
    circle4.classList.remove("select");
    circle5.classList.remove("select");
    number=1;
}
function handleSelect2(){
    circle2.classList.add("select");
    circle1.classList.remove("select");
    circle3.classList.remove("select");
    circle4.classList.remove("select");
    circle5.classList.remove("select");
    number=2;
}
function handleSelect3(){
    circle3.classList.add("select");
    circle1.classList.remove("select");
    circle2.classList.remove("select");
    circle4.classList.remove("select");
    circle5.classList.remove("select");
    number=3;
}
function handleSelect4(){
    circle4.classList.add("select");
    circle1.classList.remove("select");
    circle3.classList.remove("select");
    circle2.classList.remove("select");
    circle5.classList.remove("select");
    number=4;
}
function handleSelect5(){
    circle5.classList.add("select");
    circle1.classList.remove("select");
    circle3.classList.remove("select");
    circle4.classList.remove("select");
    circle2.classList.remove("select");
    number=5;
}
function handleSubmit(){
    localStorage.setItem('number', number.toString());
}
const selection = document.getElementById("selection");
selection.innerText = `You selected ${localStorage.getItem('number')} out of 5`;



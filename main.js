
const hearDefault = document.getElementById('heart')

hearDefault.addEventListener('mouseover', function changeColor(){
    hearDefault.style.color = 'red';
});
    
hearDefault.addEventListener('mouseout', function changeColorBack(){
    hearDefault.style.color = 'black';
});
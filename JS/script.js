var selected = 0;
const nodes = document.querySelectorAll('.profile');
const btnPrev = document.querySelector('.previous');
const btnNext = document.querySelector('.next');

btnPrev.disabled = true;
function next(){
    
    btnPrev.disabled = false;
    nodes[selected].classList.remove('active');
    nodes[selected].classList.add('none');
    selected++;
    nodes[selected].classList.add('active');
    nodes[selected].classList.remove('none');
    if(selected == (nodes.length - 1)){
        btnNext.disabled = true;
    }
    console.log("selected" + selected);
}
function prev(){
    
    btnNext.disabled = false;
    nodes[selected].classList.remove('active');
    nodes[selected].classList.add('none');
    selected--;
    nodes[selected].classList.add('active');
    nodes[selected].classList.remove('none');
    
    if(selected == 0){
        btnPrev.disabled = true;
    }
    console.log("selected" + selected);
}

btnPrev.addEventListener('click', function() {


    prev();

});

btnNext.addEventListener('click', function(){
    next();

})

console.log(selected);
console.log(nodes.length);
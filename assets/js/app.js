let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    fafaBars = document.querySelector('input'),
    nav = document.querySelector('nav ul'),
    current = 0;

function reset(){
    for(let i=0; i< sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1){
        current = -1
    }
    slideRight();
});

fafaBars.addEventListener('click', function(){
    if (nav.style.display === "none"){
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
    
}); 

startSlide();

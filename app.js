window.addEventListener('scroll', function(e){
    const target = document.querySelectorAll('.scroll');

    var index = 0, length = target.length;

    for(index;index<length;index++){
        var pos = window.pageYOffset * target[index].dataset.rate;

        if(target[index].dataset.direction === 'vertical'){
        target[index].style.transform = 'translate3d(0px, '+pos+'px ,0px)'
    }
        else{
        var posX = window.pageYOffset * target[index].dataset.ratex;
        var posY = window.pageYOffset * target[index].dataset.ratey;
        target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px ,0px)'
    }
    }

})
/*
window.addEventListener('scroll', function(e){
    const target = this.document.querySelector('.scroll');
    const parallax = this.document.querySelector(".scroll2");
    var scrolled = window.pageYOffset;
    var rate = scrolled*-2;
    var para = scrolled*2;

    target.style.transform = 'translate3d(0px,'+rate+'px , 0px)'; 
    parallax.style.transform = 'translate3d(0px, '+para+'px, 0px)';
})
*/
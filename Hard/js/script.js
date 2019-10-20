$(function () {
    var width = (parseInt($('.carrossel .item').outerWidth() + parseInt($('.carrossel .item').css('margin-right')))) * $('.carrossel .item').length;
    $('.carrossel').css('width', width);
    
    // alert(width) 

    var numImages = 2;
    var MarginPadding = 130;

    var ident = 0;
    var count = ($('.carrossel .item').length / numImages) - 1;
    var slide = (numImages * MarginPadding) + ($('.carrossel img').outerWidth() * numImages);

   $('.forth').click(function(){
       if(ident < count) {
    ident ++;

    $('.carrossel').animate({'margin-left': '-=' + slide + 'px'}, 500);
       }
});
    $('.back').click(function(){
    if(ident >=1 ) {
    ident --;

    $('.carrossel').animate({'margin-left': '+=' + slide + 'px'}, 500);
    }
});

});


/* if (window.jQuery !== undefined)
    alert("Com jQuery!"); */


var a = new Audio();
if (a.canPlayType("audio/wav")) {
a.src = "soundeffect.wav";
a.play();
}

window.addEventListener("load", function() {
document.getElementById("music").play();
}, false);

function Mudarestado(player){

document.getElementById(player).style.display = "block";

} 
function automatizar(segundos) {
    var back = null;
  
    var auto = setInterval(function () {
    if ($('.carrossel').css('margin-left') === '0px') {
     ident = '0';
    }
  
    if (ident < count && back === null) {
     ident++;
     $('.carrossel').animate({'margin-left': '-=' + slide + 'px'}, 500);
    } else {
     if (ident === 1) {
      back = null;
     } else {
      back = true;
     }
     ident--;
     $('.carrossel').animate({'margin-left': '+=' + slide + 'px'}, 500);
    }
  
    $('.forth, .back').click(function () {
     clearInterval(auto);
    });
   }, segundos * 1000);
  }


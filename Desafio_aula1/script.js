var som = document.getElementById("som");

$(".image div").mouseover(function () {
    som.pause();
    som.currentTime = 0;
    som.play();
});


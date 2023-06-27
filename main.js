const score = document.querySelector('.score-num');

const choice1 = document.querySelector('.choice1');

const choice2 = document.querySelector('.choice2');

const choice3 = document.querySelector('.choice3');

const imageTriangle = document.getElementById("image-triangle");

const whoPickedWhat = document.querySelector(".who-picked-what");
score.innerHTML = 30;

choice1.addEventListener('click', () => {
    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
    imageTriangle.style.display = "none";
    choice1.style.display = "block";
    choice1.style.transform = "translate(-85px, 100px) scale(1.5)";
    whoPickedWhat.style.display = "flex";
});

choice2.addEventListener('click', () => {
    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
    imageTriangle.style.display = "none";
    choice2.style.display = "block";
    choice2.style.transform = "translate(-350px, 100px) scale(1.5)";
    whoPickedWhat.style.display = "flex";
});

choice3.addEventListener('click', () => {
    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
    imageTriangle.style.display = "none";
    choice3.style.display = "block";
    choice3.style.transform = "translate(-190px, -120px) scale(1.5)";
    whoPickedWhat.style.display = "flex";
})
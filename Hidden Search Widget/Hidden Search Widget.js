var button = document.getElementById('button');
var search = document.getElementById('search');
var exercise = document.querySelector('.exercise');

button.addEventListener("click", () => {
    exercise.classList.toggle("active"); 
});

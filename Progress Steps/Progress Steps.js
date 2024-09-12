const stepsProgress = document.getElementById("steps-progress");
const stepPrev = document.getElementById("step-prev");
const stepNext = document.getElementById("step-next");
const steps = document.querySelectorAll(".step");

let currentStep = 1;

stepNext.addEventListener("click", () => {
    currentStep++;
    if (currentStep > steps.length) {
        currentStep = steps.length;
    }
    updateSteps();
});

stepPrev.addEventListener("click", () => {
    currentStep--;
    if (currentStep < 1) {
        currentStep = 1;
    }
    updateSteps();
});

function updateSteps() {
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
    stepsProgress.style.width = ((currentStep - 1) / (steps.length - 1)) * 100 + "%";
    if (currentStep === 1) {
        stepPrev.disabled = true;
    } else if (currentStep === steps.length) {
        stepNext.disabled = true;
    } else {
        stepPrev.disabled = false;
        stepNext.disabled = false;
    }
}

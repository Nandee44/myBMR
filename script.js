function calculateBmr(A,H,W,G) {
    let bmr;
    if (G == "male"){
        bmr = 10*W + 6.25*H - 5*A + 5;
    } else {
        bmr = 10*W + 6.25*H - 5*A - 161;
    }
    return bmr;
}

function displayBmr(bmr) {
    //insert result message in p element with id result
    let result = document.getElementById("result");
    result.textContent = "Your BMR is " + bmr + " calories per day";
}

let errors = [];

function checkCorrect(id, n, mn, mx) {
    if (Number.isNaN(n)) {
        errors.push(id + " is required");
    } else if (n >= mx || n <= mn) {
        errors.push(id + " should be between " + mn + " and " + mx);
        // need to add units
    }
}

let age;
let height;
let weight;
let gender;

// after submitting form
document.getElementById("form").addEventListener("submit", function(event) {
    console.log("hi");
    errors = [];
    document.getElementById("result").textContent = "";
    document.getElementById("error").innerHTML = ``;
    event.preventDefault();

    
    //need to add units
    age = parseFloat(document.getElementById("age").value);
    height = parseFloat(document.getElementById("height").value);
    weight = parseFloat(document.getElementById("weight").value);
    checkCorrect("age", age, 15, 80);
    checkCorrect("height", height, 140, 220);
    checkCorrect("weight", weight, 35, 300);
    gender = document.querySelector('input[name="gender"]:checked').value;

    console.log(age, weight, height);

    if (errors.length > 0) {
        errordiv = document.getElementById("error");
        for (const msg of errors) {
           errordiv.innerHTML += `<p class="errormsg">${msg}</p>`;
        }
    } else {
        let bmr = calculateBmr(age, height, weight, gender);
        console.log(bmr);
        displayBmr(bmr);
    }
});
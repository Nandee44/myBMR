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
    result.textContent = "Your BMR is " + bmr + " calories per day"
}


// after submitting form
document.getElementById("form").addEventListener("submit", function(event) {
    console.log("hi");
    event.preventDefault();

    const age = parseFloat(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    console.log(age, weight, height);

    // need to handle missing or incorrect input

    let bmr = calculateBmr(age, height, weight, gender);
    console.log(bmr);

    displayBmr(bmr);

});
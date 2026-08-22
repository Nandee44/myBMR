document.getElementById("form").addEventListener("submit", function(event) {
    console.log("hi");
    event.preventDefault();

    const age = parseFloat(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (age === null || height === null || weight === null || gender === null) {
        
    }

    console.log(age + weight + height);



});
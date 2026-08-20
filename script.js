document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

});
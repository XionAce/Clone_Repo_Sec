let enteredPassword = "";
const correctPassword = "123"; // Change this to your desired passcode
const redirectURL = "https://xionace.github.io/For_abiii/"; // Change to your destination link

function addNumber(num) {
    if (enteredPassword.length < 3) {
        enteredPassword += num;
        document.getElementById("password").value = "•".repeat(enteredPassword.length);
    }
}

function clearPassword() {
    enteredPassword = "";
    document.getElementById("password").value = "";
}

function checkPassword() {
    if (enteredPassword === correctPassword) {
        window.location.href = redirectURL;
    } else {
        alert("Incorrect password! Try again.");
        clearPassword();
    }
}

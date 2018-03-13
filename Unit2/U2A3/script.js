document.getElementById("userText").addEventListener("keydown", checkChars);
document.getElementById("charsLeft").value = "0 of 20 chars used.";

function checkChars(){
    var currentChars = document.getElementById("userText");

    var count = currentChars.length();

    if (count === 20){
        document.getElementById("userText").disabled = true;
    } else {
        document.getElementById("charsLeft").value = count.toString() + " of 20 chars used.";
    }
}

function resetForm(){
    document.getElementById("userText").value = "";
    document.getElementById("userText").disabled = false;
    document.getElementById("charsLeft").value = "0 of 20 chars used.";
}

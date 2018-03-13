function checkChars(){

    var currentChars = document.getElementById("userText").value;
    var count = currentChars.length;

    document.getElementById("charsLeft").value = count+ " of 20 chars used.";
}

function resetForm(){
    document.getElementById("userText").value = "";
    document.getElementById("userText").disabled = false;
    document.getElementById("charsLeft").value = "0 of 20 chars used.";
}

document.getElementById("charsLeft").value = "0 of 20 chars used.";
document.getElementById("userText").addEventListener("keyup", checkChars);
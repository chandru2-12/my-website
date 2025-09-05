function eventhandle(id){
    if(id==="Name"){
        document.getElementById("Name").style.backgroundColor="white";
    }
    else if(id==="cardnumber"){
        document.getElementById("cardnumber").style.backgroundColor="white";
    }
    else if(id==="Date"){
        document.getElementById("Date").style.backgroundColor="white";
    }
    else if(id==="cvv"){
        document.getElementById("cvv").style.backgroundColor="white";
    }
}
function validateform(){

    let nameField = document.forms["regform"]["canname"];
    let cardNumberField = document.forms["regform"]["cardnum"];
    let dateField = document.forms["regform"]["dates"];
    let cvvField = document.forms["regform"]["cvvss"];

    if(nameField.value.trim() === ""){
        alert("Please enter the name properly");
        nameField.focus();
        return false;
    }
    if(cardNumberField.value.trim() === ""){
        alert("Please enter the card number properly");
        cardNumberField.focus();
        return false;
    }
    if(dateField.value.trim() === ""){
        alert("Please enter the expiry date correctly");
        dateField.focus();
        return false;
    }
    if(cvvField.value.trim() === ""){
        alert("Please enter the CVV properly");
        cvvField.focus();
        return false;
    }
    return true;
}

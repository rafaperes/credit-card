// Credit Card
var numberCard = document.getElementById('numberCard');
var dateExpCard = document.getElementById('dateExpCard');
var cvvCard = document.getElementById('cvvCard');
var nameCard = document.getElementById('nameCard');

// Fields
var fieldName = document.getElementById('fieldName');
var fieldNumber = document.getElementById('fieldNumber');
var fieldExp = document.getElementById('fieldExp');
var fieldCVV = document.getElementById('fieldCVV');

fieldName.addEventListener('keyup', function () {
    if (fieldName.value == '') {
        nameCard.innerHTML = fieldName.placeholder
    } else {
        nameCard.innerHTML = fieldName.value;
    }
});

fieldNumber.addEventListener('keyup', function () {
    if (fieldNumber.value == '') {
        numberCard.innerHTML = fieldNumber.placeholder;
    } else {
        numberCard.innerHTML = fieldNumber.value;
    }
});

fieldExp.addEventListener('keyup', function () {
    if (fieldExp.value == '') {
        dateExpCard.innerHTML = fieldExp.placeholder;
    } else {
        dateExpCard.innerHTML = fieldExp.value;
    }
});

fieldCVV.addEventListener('keyup', function () {
    if (fieldCVV.value == '') {
        cvvCard.innerHTML = fieldCVV.placeholder;
    } else {
        cvvCard.innerHTML = fieldCVV.value;
    }
});
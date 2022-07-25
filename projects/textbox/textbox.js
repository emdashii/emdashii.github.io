var count = 0;
var testing = true;
var testingConfusion = false;
var testingSubstitutionCypher = false;

function onFormSubmit(e) {
    event.preventDefault();
    resetForm();
}

//Reset the data
function resetForm() {
    document.getElementById("textTest2").value = '';
    document.getElementById("textTest1").value = '';
    // document.getElementById("textTest").value = '';
    selectedRow = '';
}

function resetButton(toReset) {
    document.getElementById(toReset).value = '';
}

function onSuccess(text) {
    alert(text);
}

function confused(evt) {
    var textbox = document.getElementById("textTest1").value;
    if (testingConfusion) {
        console.log(evt);
        console.log(textbox);
    }
    if (textbox == 'test') {
        onSuccess('You completed the first tast. Now type: things are good');
        resetButton('textTest1');
    }
    return false;
}
// <input onkeypress="javascript:return false;" id="txtChar" onkeydown="javascript:return displayKeyCode(event)" type="text" name="txtChar">
function confusion(evt) {
    if (testingConfusion) console.log(evt);
    var textbox = document.getElementById("textTest1").value;
    if (testingConfusion) console.log(textbox);
    if (textbox == "things are goo" && evt.key == 'd') {
        document.getElementById('textTest1').value = "are they really? x";
        document.getElementById('textTest2').value = 'now you can type here';
        document.getElementById('textTest2').disabled = false;
    }
    return false;
}

function confuzzled(evt) {
    var textBox = document.getElementById('textTest2').value;
    if (testing) {
        console.log(evt);
        console.log(textBox);
    }
    if (isLetter(evt.keyCode)) {
        count++;
        textBox = textBox.slice(0, -1);
        textBox += substitutionCypher((count % 26), evt.keyCode);
    }
    document.getElementById('textTest2').value = textBox.toString();
    return false;
}

function isLetter(input) {
    var boolToReturn = false;
    if (((input - 65) < 26) && ((input - 65) >= 0)) {
        boolToReturn = true;
    }
    return boolToReturn;
}

function substitutionCypher(num, letter) {
    var test = ((num + letter - 65) % 26);
    var toReturn = String.fromCharCode(test + 65);  // 0-25
    if (testingSubstitutionCypher) {
        console.log(num + ' ' + letter);
        console.log(test);
        console.log(toReturn);
    }
    return toReturn.toLowerCase();
}

function generateRealisticWord(length) {
    var result = '';
    var characters = 'eeeeeeeeeeeeetttttttttaaaaaaaaooooooonnnnnnniiiiiiihhhhhhssssssrrrrrrlllldddduuucccmmmwwyyffggppbbvk';  // no j, x, q, or z
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
function generateString(length) {   // generates a string using all characters equally
    var result = '';
    for (var i = 0; i < length; i++) {
        result += String.fromCharCode(Math.floor((Math.random() * 26) + 65));
    }
    return result.toLowerCase();
}
function generateSentence(words) {
    var sentence = '';
    for (var i = 0; i < words; i++) {
        sentence += generateString(randNum(8)) + ' ';
    }
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).trim() + '.';
}
function generateParagraph(sentences) {
    var paragraph = '';
    for (var i = 0; i < sentences; i++) {
        paragraph += generateSentence(randNum(11)) + ' ';
    }
    return paragraph.trim();
}
function randNum(upperBound) {
    return Math.floor((Math.random() * upperBound) + 1);
}
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
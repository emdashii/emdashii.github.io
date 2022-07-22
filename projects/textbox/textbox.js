function onFormSubmit(e) {
	event.preventDefault();
    resetForm();    
}

//Reset the data
function resetForm() {
    document.getElementById("text1").value = '';
    document.getElementById("text2").value = '';
    // document.getElementById("textTest").value = '';
    selectedRow = '';
}


function resetButton(toReset) {
    document.getElementById(toReset).value = '';
}

function onSuccess() {
    alert('Nice job.');
}

// <input onkeypress="javascript:return false;" id="txtChar" onkeydown="javascript:return displayKeyCode(event)" type="text" name="txtChar">
function confusion(evt) {
    // console.log(evt);
    var textbox = document.getElementById("text2").value;
    // console.log(textbox);
    if (textbox == "things are goo" && evt.key == 'd') {
        document.getElementById('text2').value = "are they really? x";
        document.getElementById('text1').value = generateParagraph(5);
    }
    return false;
}

function confused(evt) {
    // console.log(evt);
    var textbox = document.getElementById("text2").value;
    // console.log(textbox);
    if (textbox == 'test') {
        onSuccess();
        document.getElementById('text2').value = "Now type: things are good";
        document.getElementById('text1').value = generateString(10);
    }
    return false;
}

function generateRealisticWord(length) {
    var result = '';
    var characters = 'eeeeeeeeeeeeetttttttttaaaaaaaaooooooonnnnnnniiiiiiihhhhhhssssssrrrrrrlllldddduuucccmmmwwyyffggppbbvk';  // no j, x, q, or z
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
function generateString(length) {   // generates a string using all characters equally
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += String.fromCharCode(Math.floor((Math.random() * 26)+65));
    }
    return result.toLowerCase();
}
function generateSentence(words) {
    var sentence = '';
    for ( var i = 0; i < words; i++ ) {
        sentence += generateString(randNum(8)) + ' ';
    }
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).trim() + '.';
}
function generateParagraph(sentences) {
    var paragraph = '';
    for ( var i = 0; i < sentences; i++ ) {
        paragraph += generateSentence(randNum(11)) + ' ';
    }
    return paragraph.trim();
}
function randNum(upperBound) {
    return Math.floor((Math.random() * upperBound) + 1);
}

// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
var count = 0;
var testing = false;
var testingLv1 = false;
var testingLv2 = false;
var testingLv2MouseEvent = false;
var testingSubstitutionCypher = false;
var isStarted = false;
var lv1Completed;
var lv1Stage1Complete;
var lv1Stage2Complete;
var lv2Completed;
// Starts the game
function startButton() {
    var textTest1 = document.getElementById('textTest1');
    var textTest2 = document.getElementById('textTest2');
    var resetButton = document.getElementById('clearText');
    if (!isStarted) {
        var start = document.getElementById('start');
        start.textContent = 'Reset';
        textTest1.disabled = false;
        resetButton.disabled = false;
        resetButton.textContent = 'Reset First Level';
        lv1Completed = false;
        lv1Stage1Complete = false;
        lv1Stage2Complete = false;
        lv2Completed = false;
        count = 0;
    }
    if (isStarted) {
        resetButton.textContent = 'Reset First Level';
        textTest1.disabled = false; // turn on level 1
        textTest2.disabled = true; // turn off level 2
        textTest1.textContent = 'has been reset';
        textTest2.textContent = generateParagraph(8);
        resetButton.disabled = false;
        // reset completed
        lv1Completed = false;
        lv1Stage1Complete = false;
        lv1Stage2Complete = false;
        lv2Completed = false;
        count = 0;
    }
    isStarted = true;
}
function gameMaster(evt) {
    var stageComplete = false;
    var textTest1 = document.getElementById('textTest1');
    var textTest2 = document.getElementById('textTest2');
    var resetButton = document.getElementById('clearText');
    // level 1 logic
    if (!lv1Completed) {
        if (!lv1Stage1Complete) {
            lv1Stage1Complete = lv1Stage1(textTest1);
        }
        if (lv1Stage1Complete && !lv1Stage2Complete) {
            lv1Stage2Complete = lv1Stage2(textTest1);
        }
        if (lv1Stage1Complete && lv1Stage2Complete) {
            textTest2.value = 'now you can type here';
            resetButton.textContent = 'Reset Second Level';
            textTest2.disabled = false;
            lv1Completed = true;
        }
    }
    // level 2 logic
    if (lv1Completed && !lv2Completed) {
    }
    return stageComplete;
}
function lv1KeyPress(evt) {
    if (testingLv1) {
        console.log('lv1KeyUp: evt');
        console.log(evt);
    }
    gameMaster(evt);
    return false;
}
function lv1Stage1(textbox) {
    var completed = false;
    if (textbox.value == 'test') {
        onSuccess('You completed the first tast. Now type: things are good');
        resetTextArea('textTest1');
        completed = true;
    }
    return completed;
}
function lv1Stage2(textbox) {
    var completed = false;
    if (textbox.value == 'things are good') {
        onSuccess('You have unlocked the second level. Continue by typing: ');
        textbox.value = 'are they really? xD';
        completed = true;
    }
    return completed;
}
function onFormSubmit(e) {
    event.preventDefault();
    resetForm();
}
//Reset the data
function resetForm() {
    resetTextArea('textTest1');
    resetTextArea('textTest2');
}
function resetTextArea(toReset) {
    var toClear = document.getElementById(toReset);
    toClear.textContent = '';
}
function resetButton() {
    var resetButton = document.getElementById('clearText');
    if (resetButton.textContent == 'Reset First Level') {
        resetTextArea('textTest1');
        lv1Completed = false;
        lv1Stage1Complete = false;
        lv1Stage2Complete = false;
    }
    else if (resetButton.textContent == 'Reset Second Level') {
        resetTextArea('textTest2');
        lv2Completed = false;
        count = 0;
    }
}
function onSuccess(text) {
    alert(text);
}
function lv2KeyPress(evt) {
    var textTest2 = document.getElementById('textTest2');
    if (testingLv2) {
        console.log('lv1KeyPress: evt, textbox, textbox.value');
        console.log(evt);
        console.log(textTest2.value);
    }
    var textBox;
    if (isLetter(evt.keyCode)) {
        count++;
        textBox = textTest2.value.slice(0, -1);
        textBox += substitutionCypher(count % 26, evt.keyCode);
        textTest2.value = textBox;
    }
    return false;
}
function lv2MouseOver(event) {
    var textTest2 = document.getElementById('textTest2');
    if (testingLv2MouseEvent) {
        console.log('lv1MouseOver: evt, textbox, textbox.value');
        console.log(event);
        console.log(textTest2.value);
    }
    var aleartTriggered = false;
    if (event.type == 'mouseover' &&
        event.timeStamp > 1000 * 60 * 60 &&
        !aleartTriggered) {
        alert("Hint: This is a substitution cypher. Type 'a' repeatedly");
        aleartTriggered = true;
    }
    return false;
}
function isLetter(input) {
    var boolToReturn = false;
    if (input - 65 < 26 && input - 65 >= 0) {
        boolToReturn = true;
    }
    return boolToReturn;
}
function substitutionCypher(num, letterChar) {
    var test = (num + letterChar - 65) % 26;
    var toReturn = String.fromCharCode(test + 65); // 0-25
    if (testingSubstitutionCypher) {
        console.log(num + ' ' + letterChar);
        console.log(test);
        console.log(toReturn);
    }
    return toReturn.toLowerCase();
}
function generateRealisticWord(length) {
    var result = '';
    var characters = 'eeeeeeeeeeeeetttttttttaaaaaaaaooooooonnnnnnniiiiiiihhhhhhssssssrrrrrrlllldddduuucccmmmwwyyffggppbbvk'; // no j, x, q, or z
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
function generateString(length) {
    // generates a string using all characters equally
    var result = '';
    for (var i = 0; i < length; i++) {
        result += String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    }
    return result.toLowerCase();
}
function generateSentence(numWords) {
    var sentence = '';
    for (var i = 0; i < numWords; i++) {
        sentence += generateString(randNum(8)) + ' ';
    }
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).trim() + '.';
}
function generateParagraph(numSentences) {
    var paragraph = '';
    for (var i = 0; i < numSentences; i++) {
        paragraph += generateSentence(randNum(11)) + ' ';
    }
    return paragraph.trim();
}
function randNum(upperBound) {
    return Math.floor(Math.random() * upperBound + 1);
}
function setCharAt(str, index, chr) {
    if (index > str.length - 1)
        return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}
// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

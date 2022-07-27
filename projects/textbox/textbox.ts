var count = 0;
var testing = false;
var testingLv1 = true;
var testingLv2 = false;
var testingSubstitutionCypher = false;

function onFormSubmit(e: KeyboardEvent): void {
    event.preventDefault();
    resetForm();
}

//Reset the data
function resetForm(): void {
    resetButton('textTest1');
    resetButton('textTest2');
}

function resetButton(toReset: string): void {
    var toClear = document.getElementById(toReset) as HTMLTextAreaElement;
    toClear.value = '';
}

function onSuccess(text: string): void {
    alert(text);
}

function lv1KeyUp(evt: KeyboardEvent): boolean {
    var textbox = document.getElementById('textTest1') as HTMLTextAreaElement;
    if (testingLv1) {
        console.log('lv1KeyUp: evt, textbox, textbox.value');
        console.log(evt);
        console.log(textbox);
        console.log(textbox.value);
    }
    if (textbox.value == 'test') {
        onSuccess('You completed the first tast. Now type: things are good');
        resetButton('textTest1');
    }
    return false;
}
// <input onkeypress="javascript:return false;" id="txtChar" onkeydown="javascript:return displayKeyCode(event)" type="text" name="txtChar">
function lv1KeyDn(evt: KeyboardEvent): boolean {
    var textbox = document.getElementById('textTest1') as HTMLTextAreaElement;
    var textTest2 = document.getElementById('textTest2') as HTMLTextAreaElement;
    if (testingLv1) {
        console.log('lv1KeyDn: evt, textbox, textbox.value');
        console.log(evt);
        console.log(textbox);
        console.log(textbox.value);
    }
    if (textbox.value == 'things are goo' && evt.key == 'd') {
        onSuccess('You have unlocked the second level. Continue by typing: ');
        textbox.value = 'are they really? x';
        textTest2.value = 'now you can type here';
        textTest2.disabled = false;
    }
    return false;
}

function lv2KeyUp(evt: KeyboardEvent): boolean {
    var textTest2 = document.getElementById('textTest2') as HTMLInputElement;
    if (testingLv2) {
        console.log('lv1KeyUp: evt, textbox, textbox.value');
        console.log(evt);
        console.log(textTest2);
        console.log(textTest2.value);
    }
    if (isLetter(evt.keyCode)) {
        count++;
        var textBox = textTest2.value.slice(0, -1);
        textBox += substitutionCypher(count % 26, evt.keyCode);
    }
    textTest2.value = textBox.toString();
    return false;
}

function lv2KeyDn(event: KeyboardEvent): boolean {
    return false;
}
function lv2MouseOver(event: KeyboardEvent): boolean {
    return false;
}

function isLetter(input: number): boolean {
    var boolToReturn = false;
    if (input - 65 < 26 && input - 65 >= 0) {
        boolToReturn = true;
    }
    return boolToReturn;
}

function substitutionCypher(num: number, letterChar: number): string {
    var test = (num + letterChar - 65) % 26;
    var toReturn = String.fromCharCode(test + 65); // 0-25
    if (testingSubstitutionCypher) {
        console.log(num + ' ' + letterChar);
        console.log(test);
        console.log(toReturn);
    }
    return toReturn.toLowerCase();
}

function generateRealisticWord(length: number): string {
    var result = '';
    var characters =
        'eeeeeeeeeeeeetttttttttaaaaaaaaooooooonnnnnnniiiiiiihhhhhhssssssrrrrrrlllldddduuucccmmmwwyyffggppbbvk'; // no j, x, q, or z
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return result;
}
function generateString(length: number): string {
    // generates a string using all characters equally
    var result = '';
    for (var i = 0; i < length; i++) {
        result += String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    }
    return result.toLowerCase();
}
function generateSentence(numWords: number): string {
    var sentence = '';
    for (var i = 0; i < numWords; i++) {
        sentence += generateString(randNum(8)) + ' ';
    }
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).trim() + '.';
}
function generateParagraph(numSentences: number): string {
    var paragraph = '';
    for (var i = 0; i < numSentences; i++) {
        paragraph += generateSentence(randNum(11)) + ' ';
    }
    return paragraph.trim();
}
function randNum(upperBound: number): number {
    return Math.floor(Math.random() * upperBound + 1);
}
function setCharAt(str: string, index: number, chr: string): string {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

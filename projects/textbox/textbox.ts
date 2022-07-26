var count = 0;
var testing = true;
var testingConfusion = false;
var testingSubstitutionCypher = false;

function onFormSubmit(e: any): void {
    event.preventDefault();
    resetForm();
}

//Reset the data
function resetForm(): void {
    var textTest1 = document.querySelector<HTMLElement>('textTest1');
    var textTest2 = document.querySelector<HTMLElement>('textTest2');
    textTest1.innerText = '';
    textTest2.innerText = '';
}

function resetButton(toReset: string): void {
    var toClear = document.querySelector<HTMLElement>(toReset);
    toClear.innerText = '';
}

function onSuccess(text: string): void {
    alert(text);
}

function confused(evt: any): boolean {
    var textbox = document.querySelector<HTMLElement>('textTest1');
    if (testingConfusion) {
        console.log(evt);
        console.log(textbox);
        console.log(textbox.innerText);
    }
    if (textbox.innerText == 'test') {
        onSuccess('You completed the first tast. Now type: things are good');
        resetButton('textTest1');
    }
    return false;
}
// <input onkeypress="javascript:return false;" id="txtChar" onkeydown="javascript:return displayKeyCode(event)" type="text" name="txtChar">
function confusion(evt: any): boolean {
    var textbox = document.querySelector<HTMLElement>('textTest1');
    var textTest2 = document.querySelector<HTMLElement>('textTest2');
    if (testingConfusion) {
        console.log(evt);
        console.log(textbox);
        console.log(textbox.innerText);
    }
    if (textbox.innerText == 'things are goo' && evt.key == 'd') {
        textbox.innerText = 'are they really? x';
        textTest2.innerText = 'now you can type here';
        // textTest2.disabled = false;
    }
    return false;
}

function confuzzled(evt: any): boolean {
    var textTest2 = document.querySelector<HTMLElement>('textTest2');
    if (testing) {
        console.log(evt);
        console.log(textTest2);
        console.log(textTest2.innerText);
    }
    if (isLetter(evt.keyCode)) {
        count++;
        var textBox = textTest2.innerText.slice(0, -1);
        textBox += substitutionCypher(count % 26, evt.keyCode);
    }
    textTest2.innerText = textBox.toString();
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

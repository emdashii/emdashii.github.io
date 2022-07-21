function onFormSubmit(e) {
	event.preventDefault();
    resetForm();    
}

//Reset the data
function resetForm() {
    document.getElementById("text1").value = '';
    document.getElementById("text2").value = '';
    document.getElementById("textTest").value = '';
    selectedRow = '';
}


function resetButton(toReset) {
    document.getElementById(toReset).value = '';
}

function onSuccess() {
    alert('Success');
}
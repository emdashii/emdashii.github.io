var selectedRow = '';

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == ''){
            // checkInputIsNumber(formData[3]);
            insertNewRecord(formData);
            console.info(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    formData["value"] = calcPrice(document.getElementById("qty").value, document.getElementById("perPrice").value);
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.productCode;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.product;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.qty;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.perPrice;
    cell5 = newRow.insertCell(4);
        cell5.innerHTML = "$" + data.value;
    cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    console.info(td.parentElement);
    console.info(td.parentElement.parentElement);
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("product").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
    // document.getElementById("value").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
    selectedRow.cells[4].innerHTML = "$" + calcPrice(formData.qty, formData.perPrice);
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("productCode").value = '';
    document.getElementById("product").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("perPrice").value = '';
    // document.getElementById("value").value = '';
    selectedRow = '';
}

//Clears the form. This does not work. Yet. 
function onClear(td) {
    var formData = readFormData();
    if (confirm('Do you want to clear the form?')) {
        confirm(td.length());
        confirm(formData.length());
    }
}

function calcPrice(x,y) {
    return Math.round(((x * y) + Number.EPSILON) * 100) / 100;
}

// function checkInputIsNumber(num){
//     if (isNaN(num)){
//        var repeat = prompt("Please Provide the input as a number");
//        return false;
//     }
//  }
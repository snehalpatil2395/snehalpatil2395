var selectedRow = null;

function onFormSubmit()
{
        var formData = readFormData();

        if (selectedRow ==null)
            insertNewRecord(formData);
        else
            updateRecord(formData);

          resetForm();
    
}
function readFormData()
{
    var formData = {};
    formData["billno"] = document.getElementById("billno").value;
    formData["billdate"] = document.getElementById("billdate").value;
    formData["mobileno"] = document.getElementById("mobileno").value;
    formData["email"] = document.getElementById("email").value;
    formData["amount"] = document.getElementById("amount").value;
    formData["remark"] = document.getElementById("remark").value;
    return formData;
}
function insertNewRecord(data)
{
     var table = document.getElementById("billdetails").getElementsByTagName('tbody')[0];
     var newRow = table.insertRow(table.length);
     cell1 = newRow.insertCell(0);
     cell1.innerHTML = data.billno;
     cell2 = newRow.insertCell(1);
     cell2.innerHTML = data.billdate;
     cell3 = newRow.insertCell(2);
     cell3.innerHTML = data.mobileno;
     cell4 = newRow.insertCell(3);
     cell4.innerHTML = data.email;
     cell5 = newRow.insertCell(4);
     cell5.innerHTML = data.amount;
     cell6 = newRow.insertCell(5);
     cell6.innerHTML = data.remark;
     cell7 = newRow.insertCell(6);
     cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm()
{
    document.getElementById("billno").value = "";
    document.getElementById("billdate").value = "";
    document.getElementById("mobileno").value = "";
    document.getElementById("email").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("remark").value = "";
    selectedRow = null;
}
function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("billno").value = selectedRow.cells[0].innerHTML;
    document.getElementById("billdate").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mobileno").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("amount").value = selectedRow.cells[4].innerHTML;
    document.getElementById("remark").value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.billno;
    selectedRow.cells[1].innerHTML = formData.billdate;
    selectedRow.cells[2].innerHTML = formData.mobileno;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.amount;
    selectedRow.cells[5].innerHTML = formData.remark;
}

function onDelete(td)
{
    if (confirm('Are you sure to delete this record?'))
    {
        row = td.parentElement.parentElement;
        document.getElementById("billdetails").deleteRow(row.rowIndex);
        resetForm();
    }
}

/*function validate()
{
    isValid = true;
    if(document.getElementById("billDate").value == "")
    {
        isValid = false;
        document.getElementById("billNoError").classList.remove("hide");
    }
    else
    {
        isValid = true;
        if(!document.getElementById("billNoError").classList.contains("hide"))
            document.getElementById("billNoError").classList.add("hide");
    }
}*/



async function gettable(){

var first=document.getElementById('first').value
var last=document.getElementById('last').value
var adress=document.getElementById('adress').value
var pincode=document.getElementById('pincode').value
var state=document.getElementById('state').value

var radioButtons = document.getElementsByName("gender");
    // Initialize a variable to store the selected value
    var selectedValue = "";
    // Loop through the radio buttons to find the selected one
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedValue = radioButtons[i].value;
            break; // Exit the loop once a selected radio button is found
        }
    }

var checkboxes = document.getElementsByName("food");
    // Initialize an array to store the selected values
    var selectedValues1 = [];
    // Loop through the checkboxes to find the selected ones
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedValues1.push(checkboxes[i].value);
        }
    }

var drop=document.getElementById('dropdown')
var res=drop.value

let tabledetail=document.getElementById('tabledetail')
tabledetail.innerHTML=`
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Adress</th>
                <th scope="col">Pincode</th>
                <th scope="col">Gender</th>
                <th scope="col">Food</th>
                <th scope="col">State</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>${first}</td>
                <td>${last}</td>
                <td>${adress}</td>
                <td>${pincode}</td>
                <td>${selectedValue}</td>
                <td>${selectedValues1.join(", ")}</td>
                <td>${state}</td>
                <td>${res}</td>
              </tr>
            </tbody>
        `
document.getElementById("myForm").reset()
}
// gettable()
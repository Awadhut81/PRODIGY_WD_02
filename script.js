let employees = JSON.parse(localStorage.getItem("employees")) || [];

function displayEmployees(){

let table = document.getElementById("employeeTable");

table.innerHTML = `
<tr>
<th>Name</th>
<th>Position</th>
<th>Actions</th>
</tr>
`;

employees.forEach((emp,index)=>{

table.innerHTML += `
<tr>
<td>${emp.name}</td>
<td>${emp.position}</td>
<td>
<button onclick="deleteEmployee(${index})">Delete</button>
</td>
</tr>
`;

});

}

function addEmployee(){

let name = document.getElementById("name").value;
let position = document.getElementById("position").value;

if(name=="" || position==""){
alert("Enter all fields");
return;
}

employees.push({name,position});

localStorage.setItem("employees",JSON.stringify(employees));

displayEmployees();

document.getElementById("name").value="";
document.getElementById("position").value="";

}

function deleteEmployee(index){

employees.splice(index,1);

localStorage.setItem("employees",JSON.stringify(employees));

displayEmployees();

}

displayEmployees();

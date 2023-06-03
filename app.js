let dueDate = document.getElementById("dueDate");
 let dueUserDate = document.getElementById("dueUserDate");


var totalAmount = document.getElementById("totalAmount");

var Discription = document.getElementById("Discription");

var result = document.getElementById("result");
var category = document.getElementById("selection");
/////TO DO LIST
let displayTable = document.getElementById("displayTable");
var budgetOfUser = document.getElementById("budgetOfUser");
var PaymentDate = document.getElementById("Payment_ Date");
let totalVal = document.getElementById("totalValue");


//////////////===button===========

let btn_setBudget = document.getElementById("setBudget");
const buttonText = btn_setBudget.innerText;
let userArry = [];


//// FOR  EDITE[TODO LIST]
let editUserId = null;


/// FOR GET LOCAL STORAGE
let getObj = localStorage.getItem('user');
if(getObj != null){
  
  userArry =JSON.parse(getObj);
}
console.log(userArry)
displayData();
/// function onclick on button
function data() {
  
  console.log(parseInt(totalAmount.value))
  
  ///// For Edite
  if(editUserId != null){
    // edite
    
    userArry.splice(editUserId,1,{'category' : category.value,'PaymentDate':PaymentDate.value,'discription':Discription.value,'TotalAmount':parseInt(totalAmount.value),"budgetOFUser" : budgetOfUser.value})
    editUserId = null;
}else{

  // insert
  userArry.push({'category' : category.value,'PaymentDate':PaymentDate.value,'discription':Discription.value,'TotalAmount':parseInt(totalAmount.value),"budgetOFUser" : budgetOfUser.value});


}

(totalAmount.value > budgetOfUser.value) ? alert("your budget is less then your expenses") :

  result.innerHTML = "<ul><li>Total Budget <br>" + (parseInt(budgetOfUser.value)) + "</li><li>" + "Expenses <br>" + parseInt(totalAmount.value) + "</li><li>" + "Ballance <br> " + ((parseInt(budgetOfUser.value)) - (parseInt(totalAmount.value))) + "</li>";
//// to do list
 

console.log(category.value)

//userArry.push({'category' : category.value,'DateUser':DateUser.value,'discription':Discription.value,'TotalAmount':totalAmount.value,"budgetOFUser" : budgetOfUser.value});
 console.log(userArry);
saveData(userArry);
setBudget.innerText = buttonText;
 dueUserDate.innerHTML = " Due Date "+"" +dueDate.value;
console.log(dueDate.value);

////===========total amout with reduce method ====
let totaluserAmount = userArry.reduce((previes,current)=>{
return previes + current.TotalAmount
},0)
console.log(totaluserAmount)
totalVal.innerHTML = "Tatal value "+" " + totaluserAmount;
}

//=======================TO DO LIST
// save deta
function saveData(userArry){
  let str = JSON.stringify(userArry);
localStorage.setItem('user',str);

displayData();

}

////    get data

function displayData(){
  let display = "";
 let t = "";
  userArry.forEach((val,id)=>{
    t = val.TotalAmount;
    console.log(t);
    display +=`<tr>
    <th>${val.category}<br>
     ${val.PaymentDate}
    </th>
    <td>${val.discription}</td>
    <td>${val.TotalAmount}</td>
    <td><i class="btn text-white fa-solid fa-edit btn-info mx-3" onclick='editData(${id})'></i></td>
    <td><i class="btn text-white fa-solid fa-trash btn btn-danger" onclick='deleteData(${id})'></i></td>
  </tr>`
 
 
})
displayTable.innerHTML = display;


}
function editData(id){
  editUserId = id
  category.value = userArry[editUserId].category
  DateUser.value = userArry[editUserId].DateUser
 totalAmount.value = userArry[editUserId].TotalAmount
 
  Discription.value = userArry[id].discription;
  budgetOfUser.value = userArry[id].budgetOFUser;
  btn_setBudget.innerText = "Edite";

 saveData(userArry);


}

function deleteData(id){
 userArry.splice(id,1);
 saveData(userArry);

 

}
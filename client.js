console.log('hi');

$( document ).ready( handleReady );
//calls jQuery into document 


function handleReady(){
    console.log('jQuery has joined the party');
    $( '#submit' ).on( 'click', addEmployee);
    $( '#myTable').on( 'click', 'button.deleteBtn', deleteEmployee);
}

let inventory = [];

function newEmployee(firstInput, lastInput, employeeNum, title, salary){
    console.log(firstInput, lastInput, employeeNum, title, salary);
    const employee ={
        FirstName:firstInput,
        LastName:lastInput,
        EmployeeNumber:employeeNum,
        Title:title,
        Salary:salary

    }
    inventory.push(employee)
    return true;

    
}


function addEmployee(){
    let First = $('#firstInput').val();
    let Last = $('#lastInput').val();
    let Number = $('#employeeNum').val();
    let Title = $('#title').val();
    let Salary =parseInt($('#salary').val());
    console.log('addEmployee');

    newEmployee(First, Last, Number, Title, Salary);

    appendEmployeesToDom();

    monthlyCost();  

//   $('#myTable').append("<tr>" + 
 //   "<td>"+First+"</td>" + "<td>" +Last+ "</td>" + "<td>"+ Number +"</td>"+ 
 //   "<td>"+Title+"</td>" + "<td>"+Salary+"</td>" + "</tr>");

  
    
}
function appendEmployeesToDom(){
    console.log(inventory);
    $('targetmyTable').empty();
    for(let employee of inventory){
        $('#myTable').append(`<tr> 
        <td>${employee.FirstName}</td>
        <td>${employee.LastName}</td>
        <td>${employee.EmployeeNumber}</td>
        <td>${employee.Title}</td>
        <td>$${employee.Salary}</td>
        <td><button class="deleteBtn">DELETE</button>
        </td>
        </tr>
        `)
        console.log(employee.FirstName);
    }
}
   
function monthlyCost(){
    let yearlyExpense = 0
    for(let i=0; i<inventory.length; i++){
        console.log(inventory[i]);

        console.log(inventory[i].Salary);
        yearlyExpense = yearlyExpense + inventory[i].Salary;
        console.log(yearlyExpense);
    }
    monthlyExpense = yearlyExpense / 12;
    console.log(monthlyExpense);
    return monthlyExpense;



}

function deleteEmployee(){
    console.log("clicked");
    $(this).closest('tr').remove();

    //$(this).closest('td').remove('delete'); 
}
//$('#myTable td').on("click", "#deleteBtn")
    //when pressed deletes corresponding row

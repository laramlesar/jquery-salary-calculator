console.log('hi');

$( document ).ready( handleReady );
//calls jQuery into document 


function handleReady(){
    console.log('jQuery has joined the party');
    $( '#submit' ).on( 'click', addEmployee);
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

function readyNow(){
 $( '#submit' ).on( 'click', addEmployee)
}

function addEmployee(){
    let First = $('#firstInput').val();
    let Last = $('#lastInput').val();
    let Number = $('#employeeNum').val();
    let Title = $('#title').val();
    let Salary = $('#salary').val();
    console.log('addEmployee');

    newEmployee(First, Last, Number, Title, Salary);


}
$('td').append()

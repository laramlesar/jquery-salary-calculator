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


function addEmployee(){
    let First = $('#firstInput').val();
    let Last = $('#lastInput').val();
    let Number = $('#employeeNum').val();
    let Title = $('#title').val();
    let Salary =parseInt($('#salary').val());
    console.log('addEmployee');

    newEmployee(First, Last, Number, Title, Salary);

    monthlyCost();  


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


//outputC.empty(); delete button will be tied to this command
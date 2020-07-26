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

    //appends to table along with created delete button

    monthlyCost();  

  /*$('#myTable').appendTo("<tr>" +
    "<th>" + First + "</th>" +
    "<th>" + Last + "</th>" +
    "<th>" + Number + "</th>" +
    "<tr>" + Title + "</tr>" +
    "<th>" + Salary + "</th>");*/
    
}
//function createDeleteButton(){
   // let delete= $('<button/>', {
       // text: 'Delete'
        //id: 'deleteButton'
  //  });

  //  $(delete).on('click', removeEmployee)
    
    //when clicked will remove row of data - empty command
//}

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


//append to total monthly
}



//outputC.empty(); delete button will be tied to this command
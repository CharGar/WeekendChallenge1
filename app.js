$(function () {
  console.log('document is ready');
  var salaryArray = [];

  $('form').on('submit', function (event) {
    console.log('form submitted');

    event.preventDefault();

    var formData = {};
    var formAsArray = $(this).serializeArray();

    formAsArray.forEach(function (input) {
      formData[input.name] = input.value;
    });
    formAsArray.forEach(function (input){
      if(input.name =="employeeAnnualSalary"){
        var cashSalValue= input.value;
        salaryArray.push(cashSalValue);
      }
    });
    appendDom(formData);
    console.log(salaryArray);
    appendSalary(salaryArray);
    clearForm();
  });
});

function appendDom(emp) {
  var $emp = $('<div class="employee"></div>'); // create a div jQuery object

  $emp.append('<p>' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</p>'); // add our employee data
  $emp.append('<p>' + emp.employeeIdNumber + '</p>');
  $emp.append('<p>' + emp.employeeJobTitle + '</p>');
  $emp.append('<p>' + emp.employeeAnnualSalary + '</p>');
  $('#employees').append($emp); // append our div to the DOM
}

function clearForm() {
  $('form').find('input[type=text]').val('');
  $('form').find('input[type=number]').val('');
}

function appendSalary(sal){
  var employeeMonthlySalary1 = 0;
  var cashSal = $('<div class="employeeMonthlySalary2"><div>');

  sal.forEach(function(input){
    var value = Number(input);
    employeeMonthlySalary1 += value;
  });

  cashSal.append('<p>' + employeeMonthlySalary1 + '</p>')
  $('#employeeMonthlySalary3').append(cashSal);
}

// Write the code to generate table
// This function generates a compound interest table.
function generateTable(form) {
  var amount; // accumulated value for each new year
  var rate; // interest rate
  var years; // years for principal to grow
  var interest; // interest earned each year
  var table; // compound interest table
  var year = 1; // the year being calculated
  amount = form.elements['deposit'].valueAsNumber;
  rate = form.elements['rate'].valueAsNumber;
  years = form.elements['years'].valueAsNumber;
  table =
    '<table>' +
    '<tr><th>Year</th><th>Starting Value</th>' +
    '<th>Interest Earned</th><th>Ending Value</th></tr>';

// ---> Write your code here to generate the table and show it in the page
while (year <= years){
  table += "<tr>";
  table += "<td>"+ year+ "</td>";
  table += "<td>$"+ amount.toFixed(2)+ "</td>";
  interest = amount * rate / 100;
  table += "<td>$"+ amount.toFixed(2) + "</td>";
  amount += interest;
  table += "<td>$"+ amount.toFixed(2) + "</td>";
  table += "</tr>";
  year++;
  }
  table += "</table>";
  document.getElementById("result").innerHTML =table;

// function generateTable()
// {
//     deposit = document.getElementById("deposit").value;
//     rate = document.getElementById("rate").value;
//     years = document.getElementById("years").value;
//     result = document.getElementById("result");
    
//     interest.innerHTML = (deposit*rate/100);
//     result.innerHTML += deposit + interest;
// }
// }
}// end generateTable

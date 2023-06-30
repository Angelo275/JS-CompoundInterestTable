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
}

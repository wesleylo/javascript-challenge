// from data.js
var tableData = data;

// get table body reference
var tbody = d3.select("tbody");

function createTable(data) {
  tbody.html(""); // clear table

  data.forEach((report) => {
    var row = tbody.append("tr");

    // append each report to table
    Object.values(report).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function filterData() {

  // Use d3 to find datetime value from the filter
  var date = d3.select("#datetime").property("value");
  var filteredData = tableData;

  if (date != '') { // if date is entered, filter by that date
    filteredData = tableData.filter(row => row.datetime === date);
  }

  createTable(filteredData);
}
var filterbtn = d3.select("#filter-btn");
filterbtn.on("click", filterData); // event listener

createTable(tableData);

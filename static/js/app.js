// import the data from data.js

const tableData = data;

// using D3, a Javascript library for producing high quality tables and data viz:
// we reference the HTML tag "tbody"
// we are telling JS to look for the tbody tag using d3's select

var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

  // create a new function to guide our data import

functio buildTable(data) {
  // clear the table (which will contain our array) first, so that we have no duplicates from a prior search
  tbody.html("");

  // call an arrow function using the forEach method to create a for loop
  data.forEach((dataRow) => {

    // look for the <tbody> html tag and append a table row <tr>
    let row = tbody.append("tr");

    // Access one object's values from the currently iterated dataRow
    // Object.values(dataRow) references one object and stores values in dataRow
    // forEach((val) indicates one object per row
    Object.values(dataRow).forEach((val) => {
      // create a row for each value
      let cell = row.append("td");
      // add the text val into the cell
      cell.text(val);
    });

  });
}
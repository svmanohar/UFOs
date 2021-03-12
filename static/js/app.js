// import the data from data.js

const tableData = data;

// using D3, a Javascript library for producing high quality tables and data viz:
// we reference the HTML tag "tbody"
// we are telling JS to look for the tbody tag using d3's select

var tbody = d3.select("tbody");

// create a new function to guide our data import

function buildTable(data) {
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

function handleClick() {
  // select the FIRST element that matches the datetime HTML tag, then
  // grab the value (property) and store as the date variable
  let date = d3.select("#datetime").property("value");
  // create a DEFAULT FILTER which reflects the default table state before a user filters data
  // we need this to reset the filter once a search is cleared
  // by making our filteredData variable equal to the source data tableData, we can be sure we're reseting our filter 
  let filteredData = tableData;

  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  // Rebuild the t able using the re-assigned (filtered) data
  // If no date was entered, the data returned is the original filtered data
  buildTable(filteredData);
}

// EVENT HANDLING: Listen for the click event using the D3 library
// Identifies the button in question using the HTML ID "filter-btn"
// On click, excecutes the handleClick function defined above
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table (with default data) when the page first loads
buildTable(tableData);
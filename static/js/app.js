// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    // d3.select(this) selects the element that triggered D3's Event
  let changedElement = d3.select(this); 
  console.log(changedElement);
    // 4b. Save the value that was changed as a variable.
  let elementValue = changedElement.property("value"); // note value is a property
  console.log(elementValue); // debug, REMOVE WHEN DONE

    // 4c. Save the id of the filter that was changed as a variable.
  let filterId = changedElement.attr("id"); // note id is an attribute of the element
  console.log(filterId); // debug, REMOVE WHEN DONE
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
  if (elementValue) {
    // passing filterID as an index into filters assigns it as key, elementValue as pair
    filters[filterId] = elementValue;
    console.log(filters); // debug, REMOVE WHEN DONE
  }
    // if value was not entered, clear filterID from filters object
  else {
    delete filters[filterId];
  }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
 
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    for (let filter in filters) {
      if (filters[filter]) {
        filteredData = filteredData.filter(row =>
          row[filter] === filters[filter]
          );
      };
    }

    // filters.forEach(filter => {
    //    filteredData = filteredData.filter(row => {
    //     row.filter.values() === filter.values(); // return rows where the current filter's 
    //   });
    // });
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  // Use D3 to listen for changes in the filters(input elements), and call the updateFilters() function
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);

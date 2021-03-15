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
let filterBy={};

// 3. Use this function to update the filters. 
function updateFilters() {
    
    // 4a. Save the element that was changed as a variable.
    let element = d3.select(this)
    
    // 4b. Save the value that was changed as a variable.
    let changedValue = element.property('value').toLowerCase().trim()

    // 4c. Save the id of the filter that was changed as a variable.
    let id = element.property('id')
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.

    if (changedValue) {
      filterBy[id]=changedValue
    }
    else {
      delete filterBy[id];
    }

    // 6. Call function to apply all filters and rebuild the table
    filterTable();

  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData=tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    //Object.entries(filterBy)

    //Method 0
    /*
    for (let filter in filterBy){
      if (filterBy[filter]) {
        filteredData = filteredData.filter(row => row[filter] === filterBy[filter]);
      };
    }
    */

    //Method 1 refactor
    //var t0 = performance.now()
    for (let filter in filterBy) {filterBy[filter] ? filteredData = filteredData.filter(row => row[filter] === filterBy[filter]) : pass}
    //var t1 = performance.now()
    //console.log(t1-t0)

    //Method 2
    /*
    var t2 = performance.now()
    Object.entries(filterBy).forEach( ([key,value])=> {
      filteredData=filteredData.filter(row =>row[key] === value)
    });
    var t3 = performance.now()
    console.log(t3-t2)
    */

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);

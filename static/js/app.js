// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
};

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
        }
      );
    });
  }

  function handleClick() {
    // Grab all values from the filter
    let datetime = d3.select("#datetime").property("value").toLowerCase();
    
    let filteredData = tableData;
    
    // Check to see if a date was entered and filter the data using that date.
    if (datetime) {
        filteredData = filteredData.filter(row => row.datetime === datetime);
    }

    /*
    // Check to see if a city was entered and filter the data using the city
    if (filterby['city']) {
        filteredData = filteredData.filter(row => row.city === filterby['city']);
    }
    // Check to see if a state was entered and filter the data using the state
    if (filterby['state']) {
        filteredData = filteredData.filter(row => row.state === filterby['state']);
    }

    // Check to see if a country was entered and filter the data using the country
    if (filterby['state']) {
        filteredData = filteredData.filter(row => row.country === filterby['country']);
    }

    // Check to see if a shape was entered and filter the data using the shape
    if (filterby['shape']) {
        filteredData = filteredData.filter(row => row.shape === filterby['shape']);
    }

    filteredData = filteredData.filter(row => 
        row.datetime === filterby['datetime'] &&
        row.city === filterby['city'] &&
        row.state === filterby['state'] &&
        row.country === filterby['country'] &&
        row.shape === filterby['shape']
        )
    */

    // Rebuild table using filtered data. If no date entered, filteredData is just OG tableData
    buildTable(filteredData);
  };
// attach event to listen for
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

    
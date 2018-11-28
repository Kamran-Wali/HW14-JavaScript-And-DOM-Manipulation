// Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// YOUR CODE HERE!
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    
  // Datetime Input
  var inputElement1 = d3.select("#datetime");
  var inputValue1 = inputElement1.property("value");

  // City Input
  var inputElement2 = d3.select("#city");
  var inputValue2 = inputElement2.property("value");

  // State Input
  var inputElement3 = d3.select("#state");
  var inputValue3 = inputElement3.property("value");

  // Country Input
  var inputElement4 = d3.select("#country");
  var inputValue4 = inputElement4.property("value");

  // Shape Input
  var inputElement5 = d3.select("#shape");
  var inputValue5 = inputElement5.property("value");
    
  // Prevent the page from refreshing
  d3.event.preventDefault();
    
  var filteredTable = tableData.filter(tableItem => tableItem.datetime === inputValue1);

  // BONUS: Refactor to use Arrow Functions!
  filteredTable.forEach((tableItem) => {
    var row = tbody.append("tr");
    Object.entries(tableItem).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });


});
    
  
    
  
    
  
    
    
    
    

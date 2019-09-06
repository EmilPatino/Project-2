$(document).ready(function () {
// Get references to page elements
var $cName = $("#name");
var $cAddress = $("#address");
var $cState = $("#state");
var $cPhone = $("#phone");
var $cEmail = $("#clientEmail");
var $cPriority = $("#priority");
var $submitBtn = $("#sButton");
var $cVal = $("#cValue");


// The API object contains methods for each kind of request we'll make
var API = {
  saveClient: function (client) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/posts/",
      data: JSON.stringify(client)
    });
  },
  getClient: function () {
    return $.ajax({
      url: "api/posts/",
      type: "GET"
    });
  },
  deleteClient: function (id) {
    return $.ajax({
      url: "api/posts/" + id,
      type: "DELETE"
    });
  }
};


// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var client = {
    companyName: $cName.val().trim(),
    clientAddress: $cAddress.val().trim(),
    clientState: $cState.val().trim(),
    clientPhone: $cPhone.val().trim(),
    clientEmail: $cEmail.val().trim(),
    clientValue: $cVal.val().trim(),
    clientPriority: $cPriority.val().trim(),

  };
console.log(client);

  if (!(client.companyName && client.clientState)) {
    alert("You must enter a client name & state!");
  }
  else {
    API.saveClient(client);

    $cName.val("");
    $cState.val("");
    $cPhone.val("");
    $cEmail.val("");
    $cVal.val("");
    $cPriority.val("");
  };
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function () {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function () {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
});
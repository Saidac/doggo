var dogs = {};
const jqxhr = $.getJSON("https://dog.ceo/api/breeds/list/all", function() {
console.log("success fetching DOG API");
})
  .done(function() {
    dogs = jqxhr.responseJSON.message;
    console.log(Object.keys(dogs));
    console.log("success loading dog api jsonResponse message");
  })
  .fail(function() {
    console.log("error loading dog api");
  })
  .always(function() {
    console.log("completed dog api request");
  });


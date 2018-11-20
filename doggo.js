var dogsApiResponse = {};
var dogNames = [];
var dogsArr = [];

const jqxhr = $.getJSON("https://dog.ceo/api/breeds/list/all", function() {
console.log("success fetching DOG API");
})
  .done(function() {
    dogsApiResponse = jqxhr.responseJSON.message;
    dogNames = Object.keys(dogsApiResponse);
    dogNames.forEach(function(cv){
      dogsArr.push({
        breedKind: cv
      });
    })

    console.log(dogsArr);

    console.log("success loading dog api jsonResponse message");
  })
  .fail(function() {
    console.log("error loading dog api");
  })
  .always(function() {
    console.log("completed dog api request");
  });


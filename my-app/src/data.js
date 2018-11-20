import $ from 'jquery';
var dogsArr = [];
var jqxhr = $.getJSON("https://dog.ceo/api/breeds/list/all", function() {
    console.log("success fetching DOG API");
})
  .done(function() {
    var dogsApiResponse = jqxhr.responseJSON.message;
    var dogNames = Object.keys(dogsApiResponse);
    dogNames.forEach(function(cv){
    dogsArr.push({
      breed: cv
    });
  })
    console.log("success loading dog api jsonResponse message");
  })
  .fail(function() {
    console.log("error loading dog api");
  })
  .always(function() {
    console.log("completed dog api request");
  });

export function getDogs() {
  return dogsArr;
}

export function matchDogs(state, value) {
  return ( state.breed.toLowerCase().indexOf(value.toLowerCase()) !== -1 )
};
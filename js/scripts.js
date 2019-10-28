$(document).ready(function() {

 $("#form1").submit(function(event){
   event.preventDefault();

   var userInput = $('input#user-input').val();

   var inputArray = userInput.split(" ");

   let words = { };

   inputArray.forEach(word => {
     if (Object.keys(words).includes(word)) {
       words[word] += 1;
     }
     else {
       words[word] = 1;
     }
   });

   //  var myProperties = Object.entries(words);
   //
   // var resultsArray = [];
   // myProperties.forEach(function(item) {
   //     resultsArray.push(Array(item).reverse());
   // });
   //
   // resultsArray.sort();
   // resultsArray.forEach(function(element) {
   //   $(".results-para").append('<li>' + element[0] +"</li>");
   // })

   myProperties.sort((item1, item2) => {
     return item1[1] > item2[1]
   });

   myProperties.forEach(function(element) {
      $(".results-para").append('<li>' + element[1] + " " + element[0] +"</li>");
   })

   $(".results").show();

 });
});

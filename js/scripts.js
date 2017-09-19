$(document).ready(function() {
  $("#stringInput").submit(function(event){

    var sentenceInput = $("input#string").val();
    var vowelsArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var sentenceArray = [];

    for ( var index = 0; index < sentenceInput.length; index++) {
      if (vowelsArray.includes(sentenceInput.charAt(index))) {
        sentenceArray.push("-");
      } else {
        sentenceArray.push(sentenceInput.charAt(index));
      }
    }
    $("#stringInput").hide();

    $("#output").text(sentenceArray.join(" "));


  event.preventDefault();
  });
});

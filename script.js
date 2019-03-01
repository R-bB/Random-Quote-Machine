function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function(newQuote) {  
          $("#text").html(newQuote.quoteText);
          $("#author").html("&dash; " + newQuote.quoteAuthor + " &dash;");
          $("#tweet").attr("href", "https://twitter.com/home/?status=" + newQuote.quoteText +
          ' -' + newQuote.quoteAuthor);
      }
     
  });
}
$(function() {
  randomQuote();
});

$("button").click(function(){
  randomQuote();
});

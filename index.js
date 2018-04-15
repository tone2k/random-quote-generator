$('#tweet-link').submit(function() {
  event.preventDefault();
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(populateQuote)
});

var quoteText;
var quoteAuthor;

function shareTweet() {
  	$('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text='+quoteText).attr('target', '_blank');
}

function populateQuote(response) {
  quoteText = response.quoteText;
  quoteAuthor = response.quoteAuthor;
  $('#quote').html(quoteText + `<br> <br>` +'-' + quoteAuthor + '-');
  return quoteText && quoteAuthor;
}

$(`#tweet`).on('click', function() {
  event.preventDefault();
  console.log(quoteText);
  window.open('https://twitter.com/intent/tweet?text='+quoteText+ ' -' +quoteAuthor);
});

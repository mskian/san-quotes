fetch('https://quotes.santhoshveer.com/quoteswritten.json')
.then(response => response.json())
.then(data => {

console.log(data)

var quotesContent = data;
var random = quotesContent.quoteswritten[Math.floor(Math.random() * quotesContent.quoteswritten.length)];
const quotesdata = document.getElementById('sanquotes');
//document.body.innerHTML = random.quotes;
document.getElementById("quotesdata").innerHTML = random.quotes;
});

$(function() {
    $("#livescore").click(function(evt) {
       $("#quotesdata").load("index.html")
       evt.preventDefault();
    })
  })
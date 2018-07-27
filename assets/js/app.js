fetch('https://quotes.santhoshveer.com/quoteswritten.json')
.then(response => response.json())
.then(data => {

console.log(data)

$("#livescore").on("click", function(t) {
t.preventDefault()
var quotesContent = data;
var random = quotesContent.quoteswritten[Math.floor(Math.random() * quotesContent.quoteswritten.length)];
document.getElementById("quotesdata").innerHTML = random.quotes;
var quotesdata = document.getElementById('sanquotes');
//document.body.innerHTML = random.quotes;

   });
}); 

fetch('https://quotes.santhoshveer.com/quoteswritten.json')
.then(response => response.json())
.then(data => {

console.log(data)

$(document).ready(function() { 
$('#livescore').on('click', function() { 
var quotesContent = data;
var random = quotesContent.quoteswritten[Math.floor(Math.random() * quotesContent.quoteswritten.length)];
const quotesdata = document.getElementById('sanquotes');
//document.body.innerHTML = random.quotes;
document.getElementById("quotesdata").innerHTML = random.quotes;
$('#div1-wrapper').load('#quotesdata'); 
});
});
});
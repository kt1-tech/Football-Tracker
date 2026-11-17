//let Argentina = 0;
//let Spain = 1;
let URL = "https://www.thesportsdb.com/api/v1/json/123/lookupevent.php?id=2533361";

 // function getScores () {
 // console.log("Hello");  
async function getScoresAsync() {

    let statusMessage = document.getElementById("status-message");

try {

statusMessage.textContent = "Loading match...";

let response = await fetch(URL, {
method: "GET"
});

if (!response.ok) {
throw new Error("Could not load match");
}

let data = await response.json();

let match = data.events[0];

document.getElementById("Argentina-score").textContent =
match.intAwayScore;

document.getElementById("Spain-score").textContent =
match.intHomeScore;

statusMessage.textContent = "";

} catch (error) {

statusMessage.textContent =
"Unable to load match. Please try again.";

console.log(error);
}
}
getScoresAsync();

let argentinaCard = document.getElementById("Argentina");
let spainCard = document.getElementById("Spain");

argentinaCard.addEventListener("click", function () {
    argentinaCard.classList.toggle ("flipped");
});

spainCard.addEventListener("click", function () {
    spainCard.classList.toggle ("flipped");
});    

//getScoresAsync();
    //let response = await fetch (URL);
    //let data = await response.json();
// console.log("Hello");
    //console.log(data);
    //let match = data.events[0];
    //console.log(match);
    //document.getElementById("Argentina-score").textContent = Argentina = match.intAwayScore;
    //document.getElementById("Spain-score").textContent = Spain = match.intHomeScore;
//getScores();

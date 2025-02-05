var x = document.querySelectorAll("img");
a = Math.floor(Math.random()*6)+1;
b = Math.floor(Math.random()*6)+1;
x[0].setAttribute("src", `./images/dice${a}.png`)

x[1].src = `./images/dice${b}.png`

if (a>b) {
    document.querySelector("h1").innerHTML= "Player 1 wins"
} else if (b>a) {
    document.querySelector("h1").innerHTML= "Player 2 wins"

}   else {
    document.querySelector("h1").innerHTML= "Draw"
}
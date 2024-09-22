function CB() {
    var yash = "";
// console.log(yash);
    for (var i = 1; i <= 216; i++) {
        var k = Math.floor(Math.random() * 10)
        yash += `<div class="booble"> ${k} </div>`;
    }
    document.querySelector("#pbtm").innerHTML = yash
}
CB();

var timer = 60;
function time() {
    var tint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#tt").textContent = timer;
        }
        else {
            clearInterval(tint);
            document.querySelector("#pbtm").innerHTML = `<h1> your score is: ${score}</h1>`;
        }
    }, 1000);
}
time();
var hit = 0;
function forhits() {
    hit = Math.floor(Math.random() * 10)
    document.querySelector("#kalahit").textContent = hit;

}
forhits()

var score = 0;
function iscore() {
    score += 10;
    document.querySelector("#s").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click", function (runs) {
    var cknum = (Number(runs.target.textContent))
    if (cknum === hit) {
        iscore()
        CB()
        forhits()
    }
})

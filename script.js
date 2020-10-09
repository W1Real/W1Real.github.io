var number = 0;

function showParagraph() {
    var x = "I am a paragraph.";
    document.getElementById("demo").innerHTML = x;
}

function addNumber() {
    number = number + 1;
    document.getElementById("number").innerHTML = number;
}

function whoIsTheNicestGirl() {
    var girl = document.getElementById("girl").value;
    if (girl.toLowerCase() == "cons") {
        document.getElementById("big-emoji").innerHTML = "😍";
        document.getElementById("score").innerHTML = "⭐⭐⭐⭐⭐";
        document.getElementById("score").classList.add('score-happy');
    }
    else {
        document.getElementById("big-emoji").innerHTML = "😭";
        document.getElementById("score").innerHTML = "⭐";
        document.getElementById("score").classList.remove('score-happy');
        document.getElementById("score").classList.add('score-sad');
    }

}
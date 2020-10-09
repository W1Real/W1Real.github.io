var number = 0;

function showParagraph() {
    var x = "I am a paragraph.";
    document.getElementById("demo").innerHTML = x;
}

function addNumber() {
    number = number + 1;
    document.getElementById("number").innerHTML = number;
}
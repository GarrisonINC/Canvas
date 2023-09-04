var weight=3;
var line_color="black";


function preload(){
classifier=ml5.imageClassifier("DoodleNet");

}

function setup(){
    canvas=createCanvas(250,250);
    canvas.center();
    background("white");
canvas.mouseReleased(classifyCanvas);
}

function clearCanvas() {
    background("white");
}

function draw() {

    strokeWeight(weight);
    stroke(line_color);
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas,gotResults);

}

function gotResults(error,results) {
if(error) {
    console.log(error);
}

else {
    console.log(results);
    document.getElementById("label").innerHTML="label- "+results[0].label;
    document.getElementById("confidence").innerHTML="confidence- "+(results[0].confidence*100).toFixed(2)+"%";
}
}
var btnsNum = 4;
var framesName = ["home","about","personal","proyects"];
var mainFrame = document.getElementById("main");

for(let i = 0; i < btnsNum; i++){
    var btn = document.getElementById("btn" + (i+1));

    btn.addEventListener("click", function(evt){
        mainFrame.src = "Sectors/" + framesName[i] + ".html";
    });
}
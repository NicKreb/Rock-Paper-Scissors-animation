
var visibleIdx = 0;

var options = document.getElementsByClassName("option");

var startTime = 0;


function shoot() {
    startTime = Date.now();
    
  loopUntilTime(startTime + 5000);
  document.getElementById("filler").classList.toggle("tickdown");
};

function loopUntilTime(endTime){
    var newIdx;
  do {
    newIdx = Math.floor(Math.random() * 3);
  }
  while (newIdx === visibleIdx);
  options[visibleIdx].style.display = "none";
  visibleIdx = newIdx;
  options[visibleIdx].style.display="";
  
  if (Date.now() < endTime)
  {
    setTimeout(() => loopUntilTime(endTime), 300);
  }
  else{
    document.getElementById("filler").classList.toggle("tickdown");
  }
}

var rpsArr = [
      "<div class='rock'><div class='rockhand rockPointerFinger'></div><div class='rockhand rockMiddleFinger'></div><div class='rockhand rockRingFinger'></div><div class='rockhand rockPinkyFinger'></div><div class='rockhand rockThumb'></div><div class='rockhand rockPalm'></div></div>",
      '<div class="scissors scissorsPointerFinger"></div><div class="scissors scissorsMiddleFinger"></div><div class="scissors scissorsRingFinger"></div><div class="scissors scissorsPinkyFinger"></div><div class="scissors scissorsThumb"></div><div class="scissors scissorsPalm"></div>', 
      '<div class="paper paperPointerFinger"> <div class="paperPointBackground"></div></div><div class="paper paperMiddleFinger"><div class="paperMidBackground"></div></div><div class="paper paperRingFinger"><div class="paperRingBackground"></div></div><div class="paper paperPinkyFinger"><div class="paperPinkyBackground"></div></div> <div class="paper paperThumb"><div class="paperThumbBackground"></div></div><div class="paper paperPalm"><div class="paperPalmBackground"></div></div>'
    ];

/* V Function that inputs one of the hands in to the box as a final result V */

function shoot() {
  document.getElementById("box").innerHTML = 
    rpsArr[Math.floor(Math.random() * rpsArr.length)];
};

/* V Function that will cycle through the above images and then finish with the shoot function result V */

function rpsAnimation() {
  
};

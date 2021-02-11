// swd.yamen@gmail.com
// http://sunrise-it.se/javascript/memory/


document.querySelector(".control-buttons span").onclick = function() {
  let yourName = prompt("Enter Your Name");
  //console.log(yourName);
  if (yourName == null || yourName == "") {
    document.querySelector(".name span").innerHTML = "Unknow";
  } else {
    document.querySelector(".name span").innerHTML = yourName;
  }

  document.querySelector(".control-buttons").remove();
};

let duration = 1000;

let blockContainer = document.querySelector(".memory-game-blocks");

let block = Array.from(blockContainer.children);

let orderRange = [...Array(block.length).keys()];
//console.log(orderRange);

shuffle(orderRange);

block.forEach((block, index) => {
  //console.log(block);
  block.style.order = orderRange[index];
  block.addEventListener("click", function() {
    flipBlock(block);
  });
});

function flipBlock(selectedBlock) {
  selectedBlock.classList.add("is-flipped");
  let allFlippedBlocks = block.filter(flippedblock =>
    flippedblock.classList.contains("is-flipped")
  );
  if (allFlippedBlocks.length === 2) {
    stopClicking();
    checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
  }
}

function stopClicking() {
  blockContainer.classList.add("no-clicking");
  setTimeout(() => {
    blockContainer.classList.remove("no-clicking");
  }, duration);
}

function checkMatchedBlocks(firstBlock, secondBlock) {
  let triesElement = document.querySelector(".tries span");
  if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");

    firstBlock.classList.add("has-match");
    secondBlock.classList.add("has-match");
  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

    setTimeout(() => {
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, duration);
  }
}

function shuffle(array) {
  let current = array.length,
    temp,
    random;

  while (current > 0) {
    random = Math.floor(Math.random() * current);

    current--;

    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
  }
  return array;
}

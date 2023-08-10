function openDoorStep1() {
  const door = document.querySelector(".door");
  door.style.transform = "translateX(100%)";
  door.onclick = null; // Disable further clicks on the door
  enterNextRoom();
}

function enterNextRoom() {
  // Transition to the next room or perform any required actions
}



// ... (existing code)

let hasKey = false;

function openDoorStep1() {
  const door = document.querySelector(".door");
  door.style.transform = "translateX(100%)";
  door.onclick = null;
  enterNextRoom();
}

function enterNextRoom() {
  const room = document.querySelector(".room");
  room.innerHTML = ""; // Clear the room content
  createKey();
  createDoorStep2();
}

function createKey() {
  const room = document.querySelector(".room");
  const key = document.createElement("div");
  key.className = "key";
  key.innerHTML = ""; //key text
  key.onclick = pickUpKey;
  room.appendChild(key);
}

function pickUpKey() {
  const key = document.querySelector(".key");
  key.style.display = "none";
  hasKey = true;
  enterFinalRoom();
}

function createDoorStep2() {
  const room = document.querySelector(".room");
  const door = document.createElement("div");
  door.className = "door";
  door.innerHTML = "Click to Enter Treasure Room (Key Needed)";
  door.onclick = openDoorStep2;
  room.appendChild(door);
}

function openDoorStep2() {
  const door = document.querySelector(".door");
  door.style.transform = "translateX(100%)";
  door.style.display = "none";
  enterFinalRoom();
}

function enterFinalRoom() {
  const room = document.querySelector(".room");
  room.innerHTML = "Welcome to the final room. Did you find the key?";
  createChest();
}

function createChest() {
  const room = document.querySelector(".room");
  const chest = document.createElement("div");
  chest.className = "chest";
  chest.innerHTML = "Need key to unlock";
  chest.onclick = openChest;
  room.appendChild(chest);
}

function openChest() {
  const chest = document.querySelector(".chest");
  if (hasKey) {
    chest.innerHTML = "Chest Unlocked! Click to claim your treasure.";
    chest.onclick = redirectToTreasurePage;
  } else {
    chest.innerHTML = "Locked!";
    const room = document.querySelector(".room");
    const returnButton = document.createElement("button");
    returnButton.textContent = "Return to previous room";
    returnButton.className = "button";
    returnButton.onclick = enterNextRoom;
    room.appendChild(returnButton);
  }
}

function redirectToTreasurePage() {
  window.location.href = "Room711.html"; // Replace with the actual URL
}

// ... (existing code)

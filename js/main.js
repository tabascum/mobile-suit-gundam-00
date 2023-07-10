const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    selectedCharRemoval();

    character.classList.add("selected");

    charImgSwitcher(character);

    charNameChange(character);

    charDescriptionChange(character);
  });
});

function charDescriptionChange(character) {
  const charDescription = document.querySelector(".character-description");
  charDescription.innerText = character.getAttribute("data-description");
}

function charNameChange(character) {
  const charName = document.querySelector(".character-name");
  charName.innerText = character.getAttribute("data-name");
}

function charImgSwitcher(character) {
  const fullCharImg = document.querySelector(".fullbody-character");
  const idChar = character.attributes.id.value;
  fullCharImg.src = `../src/images/${idChar}.webp`;
}

function selectedCharRemoval() {
  const selectedChar = document.querySelector(".selected");
  selectedChar.classList.remove("selected");
}

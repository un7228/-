const characters = {
  hero: {
    name: "勇者艾爾",
    image: "character.png",
    skills: ["火焰術", "冰霜護盾"],
    inventory: ["治癒藥水", "鋼劍"],
    attacks: ["斬擊", "火焰彈"],
    defense: 12,
    health: 100
  },
  mage: {
    name: "法師莉娜",
    image: "character2.png",
    skills: ["閃電鏈", "魔力屏障"],
    inventory: ["魔法書", "法杖"],
    attacks: ["雷擊", "寒冰箭"],
    defense: 8,
    health: 80
  }
};

function loadCharacter(id) {
  const c = characters[id];
  document.getElementById("charName").textContent = c.name;
  document.getElementById("charImage").src = c.image;
  document.getElementById("skills").textContent = c.skills.join(", ");
  document.getElementById("inventory").textContent = c.inventory.join(", ");
  document.getElementById("attacks").textContent = c.attacks.join(", ");
  document.getElementById("defense").textContent = c.defense;
  document.getElementById("health").textContent = c.health;
  document.getElementById("battleLog").textContent = "";
}

function attack() {
  const dmg = Math.floor(Math.random() * 20) + 5;
  document.getElementById("battleLog").textContent = "你對敵人造成了 " + dmg + " 點傷害！";
}

document.getElementById("characterSelect").addEventListener("change", function() {
  loadCharacter(this.value);
});

loadCharacter("hero");
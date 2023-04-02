// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  getRandom(length) {
    return Math.floor(Math.random() * length);
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const vikingStrength =
      this.vikingArmy[this.getRandom(this.vikingArmy.length)].strength;

    const saxon = this.saxonArmy[this.getRandom(this.saxonArmy.length)];
    const result = saxon.receiveDamage(vikingStrength);

    let healthySaxon = [];
    for (let i = 0; i < this.saxonArmy.length; i++) {
      if (this.saxonArmy[i].health > 0) {
        healthySaxon.push(this.saxonArmy[i]);
      }
    }
    this.saxonArmy = healthySaxon;

    return result;
  }

  saxonAttack() {
    const saxonStrength =
      this.saxonArmy[this.getRandom(this.saxonArmy.length)].strength;

    const viking = this.vikingArmy[this.getRandom(this.vikingArmy.length)];
    const result = viking.receiveDamage(saxonStrength);

    let healthyViking = [];
    for (let i = 0; i < this.vikingArmy.length; i++) {
      if (this.vikingArmy[i].health > 0) {
        healthyViking.push(this.vikingArmy[i]);
      }
    }
    this.vikingArmy = healthyViking;

    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

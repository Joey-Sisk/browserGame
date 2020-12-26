const Equipment = require("./Equipment");

class Weapons extends Equipment {
  constructor(itemType, isConsumable, value, rarity, damage, element, isUnique) {
    super(itemType, isConsumable, value, rarity);
    this.damage = damage;
    this.element = element;
    this.isUnique = isUnique;
  }

  getDamage() {
    return this.damage;
  }

  getElement() {
    return this.element;
  }

  getIsUnique() {
    return this.isUnique;
  }
}

module.exports = Weapons;
class Equipment {
  constructor(itemType, isConsumable, value, rarity) {
    this.itemType = itemType;
    this.isConsumable = isConsumable;
    this.value = value;
    this.rarity = rarity;
  }

  getItemType() {
    return this.itemType;
  }

  getIsConsumable() {
    return this.isConsumable;
  }

  getValue() {
    return this.value;
  }

  getRarity() {
    return this.rarity;
  }
}

module.exports = Equipment;
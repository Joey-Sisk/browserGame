const StatSheets = require("./StatSheets");

class Heroes extends StatSheets {
  constructor(name, lvl, hp, race, str, dex, int, charClass, perception) {
    super(name, lvl, hp, race, str, dex, int);
    this.isBoss = isBoss;
    this.loot = loot;
  }

  getCharClass() {
    return this.charClass;
  }

  getPerception() {
    return this.perception;
  }
}

module.exports = Heroes;
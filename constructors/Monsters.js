const StatSheets = require("./StatSheets");

class Monsters extends StatSheets {
  constructor(name, lvl, hp, race, str, dex, int, isBoss, loot) {
    super(name, lvl, hp, race, str, dex, int);
    this.isBoss = isBoss;
    this.loot = loot;
  }

  getIsBoss() {
    return this.isBoss;
  }

  getLoot() {
    return this.loot;
  }
}

module.exports = Monsters;
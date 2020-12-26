class StatSheets {
  constructor(name, lvl, hp, race, str, dex, int) {
    this.name = name;
    this.lvl = lvl;
    this.hp = hp;
    this.race = race;
    this.str = str;
    this.dex = dex;
    this.int = int;
  }

  getName(){
    return this.name;
  }

  getLvl(){
    return this.lvl;
  }

  getHp(){
    return this.hp;
  }

  getCharClass(){
    return this.charClass;
  }

  getRace(){
    return this.race;
  }

  getStr(){
    return this.str;
  }

  getDex(){
    return this.dex;
  }

  getInt(){
    return this.int;
  }
}

module.exports  = StatSheets;
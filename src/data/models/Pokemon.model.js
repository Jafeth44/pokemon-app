export class Pokemon {
  constructor({id, name, img, types, abilities, url, flavorText, evolutionLine}) {
    this.id = id
    this.name = name
    this.img = img
    this.types = types
    this.abilities = abilities
    this.url = url
    this.flavorText = flavorText
    this.evolutionLine = evolutionLine
  }
}
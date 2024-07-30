const { calculateAge } = require('./calculateAge')
const { calculateAttack } = require('./calculateAttack')

function formatedKnight (item) {
  const age = calculateAge(item.createdAt)
  const attack = calculateAttack(item)
  const formated = {
    name: item.name,
    nickname: item.nickname,
    age: age,
    weapons: item.weapons.length,
    attribute: item.keyAttribute,
    attack: attack ? attack : null,
    image: item.image,
    exp: age >= 7 ? Math.floor((age - 7) * Math.pow(22, 1.45)) : 0,
    _id: item._id
  }
  return formated
};

module.exports = {
  formatedKnight
}
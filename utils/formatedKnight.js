const { calculateAge } = require('./calculateAge')

function formatedKnight (item) {
  const age = calculateAge(item.createdAt)
  const formated = {
    name: item.name,
    nickname: item.nickname,
    age: age,
    weapons: item.weapons.length,
    attribute: item.keyAttribute,
    attack: 'wip',
    image: item.image,
    exp: Math.floor((age - 7) * Math.pow(22, 1.45)),
    _id: item._id
  }
  return formated
};

module.exports = {
  formatedKnight
}
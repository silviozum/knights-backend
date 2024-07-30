const { MODIFIERRULES } = require ('./constants')

function calculateAttack (knight) {
  const keyAttribute = knight.keyAttribute
  valueAttribute = knight.attributes[keyAttribute]

  const equippedWeapon = knight.weapons.find(item => item.equipped)

 if (!equippedWeapon?.mod) return false

  const modArray = MODIFIERRULES.MOD_ARRAY
  const rulesToGetModfyValue = createRulesObject(MODIFIERRULES.ALL_POSIBLE_VALUES, MODIFIERRULES.CHUNK_SIZES);

  //joining attribute values ​​with their respective modifiers to create a object of rules
  rulesToGetModfyValue.forEach((chunkObj, index) => {
    chunkObj.mod = modArray[index];
  });

  const modifierIndex = getPositionModifier(rulesToGetModfyValue)
  const modifier = rulesToGetModfyValue[modifierIndex].mod

  const attack = 10 + modifier + equippedWeapon.mod

  return attack
}

function createRulesObject(array, chunkSizes) {
  let chunks = [];
  let index = 0;

  chunkSizes.forEach(size => {
      let attrValues = array.slice(index, index + size);
      chunks.push({ attrValues });
      index += size;
  });

  return chunks;
}

function getPositionModifier (rulesToGetModfyValue) {
  let idxSelected = 0
  rulesToGetModfyValue.forEach((chunkObj, index) => {
    if (chunkObj.attrValues.includes(valueAttribute)) {
      idxSelected =  index;
    }
  });
  return idxSelected
}

module.exports = {
  calculateAttack,
  createRulesObject,
  getPositionModifier
}
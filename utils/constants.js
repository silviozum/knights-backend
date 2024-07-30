const maxAttributeValue = 21

const constants = {
  FILTER: {
    HEROES: 'heroes',
    WEAPONSWORD: 'weaponSword',
    WEAPONARCH: 'weaponArch',
    WEAPONSEPTRE: 'weaponSeptre'
  },

  MODIFIERRULES: {
    ALL_POSIBLE_VALUES: Array.from({ length: maxAttributeValue }, (_, i) => i),
    MOD_ARRAY: [-2, -1, 0, 1, 2, 3],
    CHUNK_SIZES: [9, 2, 2, 3, 3, 2],
  }
}

module.exports = constants
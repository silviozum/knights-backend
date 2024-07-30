// Importar a função e as dependências necessárias
const { calculateAttack, createRulesObject } = require('../utils/calculateAttack');

describe('calculateAttack', () => {
  it('should calculate attack correctly with equipped weapon and modifier', () => {
    const knight = {
      keyAttribute: 'strength',
      attributes: {
        strength: 20,
      },
      weapons: [
        { name: 'Sword', equipped: true, mod: 5, attr: 'strength' },
        { name: 'Shield', equipped: false, mod: 0 },
      ],
    };
    // 10 + +3 + 5
    const result = calculateAttack(knight);
    expect(result).toBe(18);
  });

  it('should handle cases where no weapon is equipped', () => {
    const knight = {
      keyAttribute: 'dexterity',
      attributes: {
        dexterity: 15,
      },
      weapons: [
        { name: 'Sword', equipped: false, mod: 0 },
      ],
    };

    const result = calculateAttack(knight);
    expect(result).toBe(false);
  });

  it('should handle cases where theres no match between weapon attr and knight attr', () => {
    const knight = {
      keyAttribute: 'Intelligence',
      attributes: {
        dexterity: 15,
      },
      weapons: [
        { name: 'Sword', equipped: false, mod: 0 },
      ],
    };

    const result = calculateAttack(knight);
    expect(result).toBe(false);
  });
});



describe('createRulesObject', () => {
  it('should split array into chunks based on chunkSizes', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const chunkSizes = [2, 3, 1];
    const expected = [
      { attrValues: [1, 2] },
      { attrValues: [3, 4, 5] },
      { attrValues: [6] }
    ];

    expect(createRulesObject(array, chunkSizes)).toEqual(expected);
  });

  it('should handle empty array', () => {
    const array = [];
    const chunkSizes = [2, 3, 1];
    const expected = [
      { attrValues: [] },
      { attrValues: [] },
      { attrValues: [] }
    ];

    expect(createRulesObject(array, chunkSizes)).toEqual(expected);
  });


  it('should handle chunkSizes with zero sizes', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const chunkSizes = [0, 2, 0, 3];
    const expected = [
      { attrValues: [] },
      { attrValues: [1, 2] },
      { attrValues: [] },
      { attrValues: [3, 4, 5] }
    ];

    expect(createRulesObject(array, chunkSizes)).toEqual(expected);
  });
});
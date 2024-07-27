const { FILTER } = require ('./constants')

const defaultFilter = { deletedAt: { $exists: false } }

const filterList = [
  {
    key: FILTER.HEROES,
    query: { deletedAt: {$exists: true} }
  },
  {
    key: FILTER.WEAPONSWORD,
    query:{
      ...defaultFilter,
      weapons: {
        $elemMatch: {
          name: 'sword',
          equipped: true
        }
      }
    }
  },
  {
    key: FILTER.WEAPONARCH,
    query: {
      ...defaultFilter,
      weapons: {
        $elemMatch: {
          name: 'arch',
          equipped: true
        }
      }
    }
  },
  {
    key: FILTER.WEAPONSEPTRE,
    query: { 
      ...defaultFilter,
      weapons: {
        $elemMatch: {
          name: 'septre',
          equipped: true
        }
      }
    }
  }
]

const createQueryByFilters = (filters) => {
  if (!filters) {
    return defaultFilter
  }

  const query = { $or: [] }
  const filterParams = filters.split(',')

  filterList.forEach(filter => {
    if (filterParams.includes(filter.key)) {
      query.$or.push(filter.query)
    }
  })

  return query
}

module.exports = {
  defaultFilter,
  createQueryByFilters
}
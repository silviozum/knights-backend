const moment = require('moment');

const calculateAge = (createdAt) => {
  return moment().diff(moment(createdAt), 'hours');
};

module.exports = {
  calculateAge
}
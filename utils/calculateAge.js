const moment = require('moment');

const calculateAge = (createdAt) => {
  return moment().diff(moment(createdAt), 'minutes');
};

module.exports = {
  calculateAge
}
module.exports = {
  up: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};

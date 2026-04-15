const { users } = require("../data");

const resolvers = {
  Query: {
    getUsers: () => users,

    getUser: (_, { id }) => {
      return users.find((user) => user.id === parseInt(id));
    },
  },

  Mutation: {
    createUser: (_, { name, email }) => {
      const newUser = {
        id: String(users.length + 1),
        name,
        email,
      };
      users.push(newUser);
      return newUser;
    },

    updateUser: (_, { id, name, email }) => {
      const index = users.findIndex((user) => String(user.id) === String(id));
      if (index === -1) throw new Error(`User with id ${id} not found`);

      users[index] = {
        ...users[index],
        ...(name && { name }),
        ...(email && { email }),
      };

      return users[index];
    },
  },
};

module.exports = resolvers;

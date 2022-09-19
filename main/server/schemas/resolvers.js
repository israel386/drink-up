const { AuthenticationError } = require('apollo-server-express');
const { User, Drink, Alcohol } = require('../models');
const Drinks = require('../models/Drink');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {

  // Any infromation that i want to get from database
  Query: {
    alcohol: async () => {
      return await Alcohol.find();
    },

    drinks: async (parent, { alcohol, name }) => {
      const params = {};

      if (alcohol) {
        params.alcohol = alcohol;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Drinks.find(params).populate('alcohol');
    },

    drinks: async (parent, { _id }) => {
      return await Drink.findById(_id).populate('alcohol');
    },


    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        .select('-__v -password')
        return userData;
    }
    throw new AuthenticationError('You are not logged in!');
    }
  },

  // Mutation makes changes to database 
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    saveDrink: async (parent, { drinkData }, context) => {
      if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
              { _id: context.user._id },
              { $addToSet: {savedDrinks: drinkData} },
              { new: true }
          )
          return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!')
    },

    deleteDrink: async (parent, { drinkId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
            {_id: context.user._id},
            { $pull: { savedDrinks: { drinkId: drinkId } } },
            { new: true }
        ); 

        return updatedUser;
      }
    } 
  }
};

module.exports = resolvers;

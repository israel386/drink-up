const db = require('./connection');
const { User, Product, Category, Drink } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Rum' },
    { name: 'Tequila' },
    { name: 'Vodka' },
  ]);

  console.log('categories seeded');

  await Drink.deleteMany();

  const drinks = await Drink.insertMany([

    // Rum drink options 
    {
      name: 'Classic Daiquiri',
      ingredients: "White rum, lime, simple syrup",
      image: '',
      category: categories[0]._id
    },
    {
      name: 'Classic Mojito',
      ingredients: "White rum, simple syrup, lime, mint, soda water",
      image: '',
      category: categories[0]._id,
    },
    {
      name: "Classic piña colada ",
      ingredients: "Aged rum, frozen pineapple, pineapple juice, lime juice, cream of coconut, ice",
      image: '',
      category: categories[0]._id,
    },
    {
      name: " Dark and Stormy cocktail",
      ingredients: "Dark rum, ginger beer, lime wedge",
      image: '',
      category: categories[0]._id,
    },
    {
      name: "Hurricane Cocktail",
      ingredients: " Light rum, dark rum, passion fruit syrup, orange juice, lime juice, grenadine",
      image: '',
      category: categories[0]._id,
    },
    
    // Tequila Drink options 
    {
      name: "Paloma",
      category: categories[1]._id,
      ingredients:
      "Tequila, grapefruit, lime, simple syrup, soda water  ",
      image: " images/tequila_images/Paloma.png "
    },
    {
      name: "Tequila Sour ",
      category: categories[1]._id,
      ingredients:
      "Tequila, lemon juice, lime juice, simple syrup, bitters, egg white ",
      image: " images/tequila_images/Tequila Sour .png "
    },
    {
      name: "Mexican Mule",
      category: categories[1]._id,
      ingredients:
      "Tequila, lime juice, ginger beer ",
      image: " images/tequila_images/mexican mule.png "
    },
    {
      name: "Tequila Sunrise", 
      category: categories[1]._id,
      ingredients: "Tequila, orange juice, grenadine ",
      image: "images/tequila_images/tequila sunrise.png "
    },
    {
      name: "Bloody Maria", 
      category: categories[1]._id,
      ingredients:
      "Tequila, lemon, tomato juice, horseradish, Tabasco, Worcestershire, celery salt ",
      image: " images/tequila_images/Bloody Maria.png"
    },

    // Vodka Drink Options 
    {
      name: "Gimlet", 
      category: categories[2]._id,
      ingredients:
      "Gin, lime juice, simple syrup ",
      image: " "
    },
    {
      name: "Cosmopolitan ",
      category: categories[2]._id,
      ingredients:
      "Vodka, 100% cranberry juice, lemon juice, Cointreau, simple syrup",
      image: " "
    },
    {
      name: "Vodka Sour", 
      category: categories[2]._id,
      ingredients:
      "Vodka, lemon juice, simple syrup, Angostura bitters, egg white",
      image: " "
    },
    {
      name: "White Russian", 
      category: categories[2]._id,
      ingredients:
      "Vodka, Kahlua, cream",
      image: " "
    },
    {
      name: "Collins",
      category: categories[2]._id,
      ingredients:
      "Vodka, lemon juice, simple syrup, soda water",
      image: " "
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});

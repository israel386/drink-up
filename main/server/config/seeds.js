const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Rum' },
    { name: 'Tequila' },
    { name: 'Vodka' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Classic Daiquiri',
      description:
        'White rum, lime, simple syrup',
      image: 'Daiquiri.png',
      category: categories[0]._id
    },
    {
      name: 'Classic Mojito',
      description:
        'White rum, simple syrup, lime, mint, soda water',
      image: 'Mojito.png',
      category: categories[0]._id
    },
    {
      name: 'Classic Piña Colada',
      description:
        'Aged rum, frozen pineapple, pineapple juice, lime juice, cream of coconut, ice',
      image: 'colada.png',
      category: categories[0]._id
    },
    {
      name: 'Dark and Stormy cocktail',
      description:
        'Dark rum, ginger beer, lime wedge',
      image: '_Dark_Stormy.png',
      category: categories[0]._id
    },
    {
      name: 'Hurricane Cocktail',
      description:
        'Light rum, dark rum, passion fruit syrup, orange juice, lime juice, grenadine',
      image: 'Hurricane_Cocktail.png',
      category: categories[0]._id
    },
    {
      name: 'Paloma',
      description:
        'Tequila, grapefruit, lime, simple syrup, soda water',
      image: 'Paloma.png',
      category: categories[1]._id
    },
    {
      name: 'Tequila Sour',
      description:
        'Tequila, lemon juice, lime juice, simple syrup, bitters, egg white',
      image: 'TequilaSour.png',
      category: categories[1]._id
    },
    {
      name: 'Mexican Mule',
      description:
        'Tequila, lime juice, ginger beer',
      image: 'MexicanMule.png',
      category: categories[1]._id
    },
    {
      name: 'Tequila Sunrise',
      description:
        'Tequila, orange juice, grenadine',
      image: 'tequilaSunrise.png',
      category: categories[1]._id
    },
    {
      name: 'Bloody Maria',
      description:
        'Tequila, lemon, tomato juice, horseradish, Tabasco, Worcestershire, celery salt',
      image: 'BloodyMaria.png',
      category: categories[1]._id
    },
    {
      name: 'Gimlet',
      description:
        'Gin, lime juice, simple syrup',
      image: 'Gimlet.png',
      category: categories[2]._id
    },
    {
      name: 'Cosmopolitan',
      description:
        'Vodka, 100% cranberry juice, lemon juice, Cointreau, simple syrup',
      image: 'Cosmopolitan.png',
      category: categories[2]._id
    },
    {
      name: 'Vodka Sour',
      description:
        'Vodka, lemon juice, simple syrup, Angostura bitters, egg white',
      image: 'Vodka_Sour.png',
      category: categories[2]._id
    },
    {
      name: 'White Russian',
      description:
        'Vodka, Kahlua, cream',
      image: 'White_Russian.png',
      category: categories[2]._id
    },
    {
      name: 'Collins',
      description:
        'Vodka, lemon juice, simple syrup, soda water',
      image: 'Collins.png',
      category: categories[2]._id
    }

  ]);

  console.log('Drinks seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
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

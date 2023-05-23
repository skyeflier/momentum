const db = require('./connection');
const { User, Subscription } = require('../models');

db.once('open', async () => {
    await Subscription.deleteMany();

    const subscriptions = await Subscription.insertMany([
        {
            name: 'Monthly MOMentum Box',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
            image: 'momentum-box-one.jpg',
            price: 39.99,
            quantity: 1
        }
    ]);

    console.log('subscriptions seeded');

    await User.deleteMany();

    await User.create({
        "firstName": "Bailey",
        "lastName": "Reiners",
        "email": "bailey@email.com",
        "password": "password01",
        orders: [
            {
                subscriptions: []
            }
        ]
    });

    await User.create({
        "firstName": "Jemilah",
        "lastName": "Leonard",
        "email": "jemilah@email.com",
        "password": "password02"
    });

    console.log('users seeded');

    process.exit();
});

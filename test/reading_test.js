const assert = require('assert')
const User = require('../models/user')

describe('Reads Users from DB', ()=>{
    let julian;

    beforeEach((done)=>{
        julian = new User({ 
            firstName:'Julian',
            lastName: 'Moses',
            email: 'test@test.com',
            password: 'password'
         });
        frank = new User({ 
            firstName: 'Frank',
            lastName: 'Vukaj',
            email: 'test@test.com',
            password: 'password'
        });
        mitch = new User({ 
            firstName: 'Mitch',
            lastName: 'Perinar',
            email: 'test@test.com',
            password: 'password'
        });
        yosh = new User({ 
            firstName: 'Yosh',
            lastName:'',
            email: 'test@test.com',
            password: 'password'
        });

        Promise.all([frank.save(), mitch.save(), yosh.save(), julian.save()])
    });

    xit('finds all users with the name of Julian', (done)=>{
        User.find({ name: 'Julian' })
            .then((users)=>{
                assert(users[0]._id.toString()=== julian._id.toString())
                done()
            })
    })
});
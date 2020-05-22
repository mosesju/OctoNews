const mongoose = require('mongoose')

before(done=>{
    mongoose.connect('mongodb://localhost/users_test', { useNewUrlParser:true });
    mongoose.connection
    // open & error are events as part of Mongoose library
        .once('open', ()=>{ done(); })
        .on('error', (error) =>{
            console.warn('Warning', error)
        }); 
});

// done tells mocha when the done() function is called
// the next test is ready to be run 
beforeEach((done) => {
    const { users, weathers } = mongoose.connection.collections
    users.drop(()=>{
        weathers.drop(()=>{
            done()
        })
    })
    // This is how you drop all the collections
    // const { users, comments, blogposts } = mongoose.connection.collections    
    // users.drop(()=>{
    //     // Ready to run the next test
    //     // Added for the association stuff
    //     comments.drop(() => {
    //         blogposts.drop(() =>{
    //             done();
    //         });
    //     });
    // });
});
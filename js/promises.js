console.log('now in promises')

// Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Description
// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.



// function downloadSong(songName){
//     console.log(`Searching for ${songName} in our database...`)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (songName.length > 4){
//                 resolve(`${songName}.mp4`)
//             } else {
//                 reject(`${songName} not in database`)
//             }
//         }, 1000)
//     })
// }


// let mySong = downloadSong('abc');
// console.log(mySong)

// mySong // you can separate lines when you do variable.fn...since js doesnt acct for lines
//     .then((val) => {console.log(val)}) // you can chain more 'then's with .then after closing () of last .then
//     .catch(err => console.warn(err)) 

// most promises you work with existing fns, not creating your own




// Real Life example
// get the price of a user's total order based on their ID
// userID -> user -> user's orders -> calculate order total

function getUser(userId){
    return new Promise((resolve, reject) => { // resolve and reject can have any names, just in that order
        console.log(`Searching for user #${userId} in database`);
        setTimeout(() => {
            // setup some fake rule for if a user exists
            if (userId > 100){
                let user = {
                    id: userId,
                    username: 'johnq'
                }
                resolve(user)
            } else {
                reject(`No user with id #${userId}`)
            }
        }, 2000)
    })
}

function getUserOrder(user){
    console.log(`Getting the orders for ${user.username}`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let orders = [
                {prodName: 'Computer', price: 1000},
                {prodName: 'Picture Frame', price: 12},
                {prodName: 'Notebook', price: 5}
            ]
            resolve(orders)
        }, 1000)
    })
}

function getOrderTotal(order){
    console.log(`Calculating order total:...`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let total = 0;
            order.forEach(p => total += p['price']);
            resolve(total)
        }, 1000)
    })
}

function getUsersTotalFromUserId(userId){
    getUser(userId)
        .then(user => getUserOrder(user))
        .then(order => getOrderTotal(order))
        .then(total => console.log(`User #${userId} has a total of $${total}`))
        .catch(err => console.warn(err)) // you only need one catch for the whole .then chain
};

console.log(getUsersTotalFromUserId(1000));
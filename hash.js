const bcrypt = require('bcrypt');
const { MD5 } = require('crypto-js')
const jwt = require('jsonwebtoken')

// bcrypt.genSalt(10, (err, salt) => {

//     if (err) return next(err);

//     bcrypt.hash('123456', salt, (err, hash) => {
//         if (err) return next(err);
//         console.log(hash)
//     })


// })
// const secret = 'mypass';
// const secretSalt

// const user = {
//     id: 1,
//     token: MD5('123456').toString()
// }

// console.log(user)

const id = '1000';
const secret = '123456';

const recievedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.yBVqsVLkYa-pVbVhZu9fztXv6X0B3F8fl0TyvETreg8'

const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(recievedToken, secret);
console.log(decodeToken)
const bcryptjs = require('bcryptjs')
const password = 'secret123'

bcryptjs.genSalt()
    .then((salt) => {
        console.log('salt', salt)
        bcryptjs.hash(password, salt)
            .then((encrypted) => {
                console.log('encrypted', encrypted)
            })
    })


    // In cryptography, a salt is random data that is used as an additional input to a one-way function that hashes data, a password or passphrase. Salts are used to safeguard passwords in storage. Historically a password was stored in plaintext on a system, but over time additional safeguards were developed to protect a user's password against being read from the system. A salt is one of those methods.
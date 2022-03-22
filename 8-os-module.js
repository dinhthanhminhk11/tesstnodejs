const os  = require('os');


const user = os.userInfo()
// console.log(user)

// console.log(`the system uptime is ${os.uptime()} seconds`)


const courrentOS = {
    name: os.type(),
    release : os.release(),
    total : os.totalmem(),
    freeMem: os.freemem(),
}

console.log(courrentOS)



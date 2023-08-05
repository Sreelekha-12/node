const os = require('os');
//info about current user
const user = os.userInfo();
console.log(user);//system userinfo
//method returns the system uptime in seconds
const time = os.uptime();
console.log(`the system uptime is ${time} seconds`);
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS);


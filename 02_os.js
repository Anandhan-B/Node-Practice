import os from 'os'

console.log('OS Module');

console.log(os.version());  // Windows 10 Pro Education
console.log(os.type());     // Windows_NT
console.log(os.homedir());  // C:\Users\UserName
console.log(os.hostname()); // DESKTOP-NAME
console.log(os.freemem());  // 1411375104 in bytes
console.log(os.totalmem());  // 4126527488 in bytes
console.log(os.machine());  // x86_64   
console.log(os.arch());     // x64
//console.log(os.networkInterfaces());
//console.log(os.userInfo());
console.log(os.uptime());   // 74373.296
console.log(os.platform()); // win32
console.log(os.release());  // 10.0.19042
//console.log(os.cpus());
console.log(os.tmpdir());  // C:\Users\UserName\AppData\Local\Temp

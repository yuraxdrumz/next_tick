const fs = require('fs')
// in an async operation setImmediate willl always fire first
fs.readFile('./nextTick.js',()=>{
  setTimeout(()=>{
    console.log('async timeout 0')
  },0)
  setImmediate(()=>{
    console.log('async immediate')
  })
})
// in a sync operation setImmediate and setTimeout 0 will be random becuase no I/O operations are made
setImmediate(()=>{
  console.log('immediate')
})
setTimeout(()=>{
  console.log('timeout 10')
},10)
setTimeout(()=>{
  console.log('timeout 0')
},0)
// process.nextTick executes after the event loop finished its cycle, but before calling the next event loop cycle
// process.nextTick will execute after users code as been complete.
process.nextTick(()=>{
  console.log('next tick 1')
  process.nextTick(()=>console.log('next tick 2'))
})
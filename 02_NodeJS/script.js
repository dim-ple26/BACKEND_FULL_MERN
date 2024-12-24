const fs = require('fs');
// fs ki saari powers nikal ke fs constant mein aa gyi

// fs.writeFile('hey.txt','hey , how are you??',function(err){
//     if(err) console.error(err);
//     else console.log("Done")
// })

fs.appendFile('hey.txt','I am fine...what about you??', function(err){
    if(err) console.error(err);
    else console.log('appended')
})

fs.rename('hey.txt','hello.txt',function(err){
    if(err) console.error(err);
    else console.log('done')
})



fs.copyFile('hello.txt','./copy/chhhh.txt',function(err){
    if(err) console.error(err)
        else console.log('done')
})

fs.unlink('hey.txt',function(err){
    if(err) console.error(err)
        else console.log('done')
})



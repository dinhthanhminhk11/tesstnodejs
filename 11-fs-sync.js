const {  readFile,writeFile} = require('fs')


readFile('./content/first.txt','utf-8' ,(error , result) => {
    if (error){
        console.log(error)
        return
    }
    console.log(result)
    const first = result;
    readFile('./content/second.txt' , 'utf-8' ,(error , result) => {
        if (error){
            console.log(error)
            return
        }
        const second = result;
        writeFile('/content/result-sync.txt' , `here is the result : ${first} , ${second} ` , {flag : 'a'})
    })
})
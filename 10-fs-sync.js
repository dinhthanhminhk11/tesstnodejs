const {  readFileSync,writeFileSync} = require('fs')


const first =  readFileSync('./content/first.txt' , 'utf8')
const second = readFileSync('./content/second.txt')


writeFileSync('./content/result-sync.txt' , `here is the result : ${first} , ${second}` , {flag: 'a'}) // thêm thuộc tính flag : 'a' thì sẽ ghi đề vào file có trùng tên còn không có thì nó sẽ xóa đi và viết lại

console.log(first + second)
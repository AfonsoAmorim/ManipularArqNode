const http = require('http');

const fs = require('fs')
const porta = process.env.porta
const server=http.createServer((req,res)=>{
    fs.readFile('hoje.html', (err,arquivo)=>{
        res.writeHead(200, {'Context-Type':'text/html'})
        res.write(arquivo)
        return res.end()
    })
})

server.listen(porta || 3015, ()=> {console.log('Servidor rodando')});



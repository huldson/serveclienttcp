const net = require('net')

const handleConnection = Socket =>{
    console.log('entrou no sservidor')
}
const server = net.createServer(handleConnection)
server.on("connection", function (){console.log('conectado')})
server.listen(4000, '127.0.0.1')
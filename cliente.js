const net = require('net')

const handleConnection = Socket =>{
    console.log('entrou no sservidor')
}
const client = net.createConnection(4000, '127.0.0.1', function (){console.log('conectado') })

client.on('end', function(){console.log('desconctado')})

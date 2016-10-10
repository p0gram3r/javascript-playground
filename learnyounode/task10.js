// learnyounode - task 10
// TCP time server

const net = require('net')
const strftime = require('strftime')

var server = net.createServer(function (socket) {
	var format = '%Y-%m-%d %H:%M'
	var result = strftime(format) + "\n"

	socket.write(result)
	socket.end()
})
server.listen(process.argv[2]);
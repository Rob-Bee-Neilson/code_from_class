var express = require('express')
var server = express()
var path = require('path')

server.use(express.static('public'))

// server.get('/', function(req,res){
//   console.log(req.query)
//   var name = req.query.name || "person!!!"
//   res.send(`<h1>Welcome ${name}</h1><p>Here is some text.  Contact me <a href="/contact">here</a></p>`)
// })

server.get('/static-page', function(req,res){
  res.sendFile(__dirname + '/' + 'staticPage.html')
})

// server.get('/style.css', function(req,res){
//   res.sendFile(__dirname + '/' + 'style.css')
// })
//
// server.get('/hat.jpg', function(req,res){
//   res.sendFile(__dirname + '/' + 'hat.jpg')
// })


server.get('/', function(req,res){
  console.log('new request!!!!', 'from', req.headers['user-agent'])
  console.log('')
  var name = req.query.name || "person"
  res.send(`<style>h1 { font-style: italic; }</style><h1 style="color: red;">Welcome ${name}</h1><p>Here is some text.  Contact me <a href="/contact">here</a></p><form><input type='text' name='name'/><button>Go</button></form>`)
})


server.get('/test/mypage', function(req,res){
  res.sendFile(__dirname + '/myPage.html')
})

server.get('/name/:name', function(req,res){
  console.log('new request!!!!', 'from', req.headers['user-agent'])
  console.log('')

  console.log(req.params)
  console.log(name)
  var name = req.params.name || "person!!!"
  res.send(`<h1>Welcome ${name}</h1><p>Here is some text.  Contact me <a href="/contact">here</a></p>`)
})

server.get('/contact', function(req,res){
  console.log('new request!!!!', 'from', req.headers['user-agent'])
  console.log('')

  res.send('<h1>This is the contact page</h1><p>EDA is at 275 Cuba St!. Go <a href="/">back</a></p>')
})

module.exports = server

const express = require('express');
const hbs = require('express-handlebars');
const db = require('./db')

const server = express();

server.engine('hbs', hbs({extname: '.hbs'}));
server.set('view engine', 'hbs');

server.use(express.urlencoded({extended: true}))

server.get('/', (req,res) => {
    let viewData = {
        message: "Hi there."
    }
    res.render('home', viewData)
})

server.get('/users', (req,res) => {
    db.getUsers()
    .then(users => {
        let viewData = {
            users: users
        }
        res.render('users', viewData)
    })
})

server.get('/users/create', (req,res) => {
    console.log('/users/create')
    let viewData = {
    }
    res.render('form', viewData)
})

server.post('/users/create', (req,res) => {
    let formDetails = req.body

    let user = {
        name: formDetails.name
    }
    let profile = {
        url: formDetails.url
    }

    // console.log(user, profile)

    // Another option:
    // db.createUserAndProfile(user, profile)
    // .then(userIds => {
    //     res.redirect('/users/' + userIds[0])
    // })

    db.addProfile(profile)
    .then(profileIds => {
        user.profile_id = profileIds[0]

        db.addUser(user)
        .then(userIds => {
            res.redirect('/users/' + userIds[0])
        })
    })
})

server.get('/users/:id', (req,res) => {
    let id = req.params.id

    console.log('/users/:id', id)

    db.getUserAndProfile(id)
    .then(user => {
        let viewData = {
            user: user
        }
        console.log(user)
        res.render('user', viewData)
    })
})



module.exports = server
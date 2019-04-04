const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

function getUsers(db = connection) {
    // db = db || connection
    return db('users').select()
}

function getUserAndProfile(id, db = connection) {
    return db('users')
    .join('profiles', 'profiles.id', 'users.profile_id')
    .where('users.id', id)
    .select()
    .first()
}

function addUser(user, db = connection){
    return db('users').insert(user)
}

function addProfile(profile, db = connection){
    return db('profiles').insert(profile)
}

module.exports = {
    getUsers: getUsers,
    getUserAndProfile: getUserAndProfile,
    addUser: addUser,
    addProfile: addProfile,
}
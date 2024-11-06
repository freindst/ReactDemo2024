const { db } = require("../server/models/user");

db = db.getSiblingDB('myreactdemo');
db.createCollection('users');
db.users.insertMany([
    {
        name: 'user1',
        email: 'user1@email',
        password: 'abcabcabc',
    },
    {
        name: 'user2',
        email: 'user2@email',
        password: 'aaabbbccc',
    }
])
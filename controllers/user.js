class User {

    login(req, res)  {
        res.send('login')
    }

    register(req, res)  {
        res.send('register')
    }
    
}

module.exports = new User()


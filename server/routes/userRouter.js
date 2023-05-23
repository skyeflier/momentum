const app = require('express')
const router = app.Router()
const { doRegister, doLogin, getUser } = require('../controllers/userController')

app.post('/register', doRegister)
app.post('/login', doLogin)
app.get('/user', getUser)
module.exports = router;
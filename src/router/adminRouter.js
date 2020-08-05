const conn = require('../config/database')
const router = require('express').Router()

// LOGIN ADMIN
router.post('/admin/login', (req, res) => {
    const {user, pass} = req.body

    const sql = `SELECT * FROM admin WHERE user = '${user}' AND password = '${pass}'`

    conn.query(sql, (err, result) => {
        if (err) return res.status(500).send(err)

        res.status(200).send(result)
    })
})

module.exports = router
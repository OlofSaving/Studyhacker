const express = require('express');
const router = express.Router();
const { pool } = require('../pool');
const { requiresAuth } = require('express-openid-connect');

router.get('/', requiresAuth(), async (req, res) => {
    try {
        const email = req.oidc.user.email;
        const user = await pool.query('SELECT * FROM users WHERE user_mail = $1', [email]);
        
        if (!user.rows[0]) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user.rows[0]);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
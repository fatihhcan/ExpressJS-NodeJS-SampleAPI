const express = require('express');
const router = express.Router

module.exports = router;

const users = [{ name: 'Fatih', email: 'fatih@mail.com' }]

app.get('/', (_, res) => {
    res.send('Express App');
});

app.get('/users', (_, res) => {
    res.json({ ok: true, users });
});

app.get('/users/:name', (req, res) => {
    const { name } = req.params;
    const user = users.filter((user) => user.name === name)[0];
    res.json({ oke: true, user });
});


app.post('/adduser', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ name, email });
    }
});

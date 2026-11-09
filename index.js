const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

// Сюда вставь токен от BotFather
const BOT_TOKEN = 'ТВОЙ_ТОКЕН_ЗДЕСЬ';
// Сюда вставь свой chat_id (узнаешь на шаге 3)
const ADMIN_CHAT_ID = 'ТВОЙ_CHAT_ID';

app.post('/notify', async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).send('No message');

    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: ADMIN_CHAT_ID,
                text: message
            })
        });
        res.send('OK');
    } catch (e) {
        res.status(500).send('Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'));
const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

// ⚠️ ВСТАВЬ СВОЙ ТОКЕН СЮДА
const BOT_TOKEN = 'ТВОЙ_ТОКЕН_ЗДЕСЬ';
// ⚠️ ВСТАВЬ СВОЙ CHAT_ID СЮДА (число)
const ADMIN_CHAT_ID = 'ТВОЙ_CHAT_ID';

app.post('/notify', async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).send('No message');

    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: ADMIN_CHAT_ID,
                text: message
            })
        });
        res.send('OK');
    } catch (e) {
        res.status(500).send('Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'));
nano index.js
const ADMIN_CHAT_ID = '8250210744';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

let items = []; // In-memory storage for simplicity

// GET: Retrieve list of items
app.get('/items', (req, res) => {
    res.status(200).json({ items });
});

// POST: Add a new item
app.post('/items', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Item name cannot be empty' });
    }

    const newItem = {
        id: items.length + 1, // Simple unique ID
        name,
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// Error handling for unknown routes
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

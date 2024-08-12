// server/routes/flashcards.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all flashcards
router.get('/', (req, res) => {
    db.query('SELECT * FROM flashcards', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a new flashcard
router.post('/', (req, res) => {
    const { question, answer } = req.body;
    db.query('INSERT INTO flashcards (question, answer) VALUES (?, ?)', [question, answer], (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, question, answer });
    });
});

// Update a flashcard
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;
    db.query('UPDATE flashcards SET question = ?, answer = ? WHERE id = ?', [question, answer, id], (err, results) => {
        if (err) throw err;
        res.json({ id, question, answer });
    });
});

// Delete a flashcard
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM flashcards WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json({ id });
    });
});

module.exports = router;

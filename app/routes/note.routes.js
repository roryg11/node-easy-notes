module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    app.post('/notes', notes.create);

    app.get('/notes', notes.findAll);

    app.get('notes/:noteId', notes.findOne);

    app.put('/notes/:nodeId', notes.update);

    app.delete('/notes/:noteId', notes.delete);
}
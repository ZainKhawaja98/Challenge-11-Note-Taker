//get all notes
router.get('/notes', (req, res) => {
    let results = notesArray;
    res.json(results);
});

//get a note
router.get('/notes/:id',(req, res) => {
    let result = findById(req.params.id, notesArray);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

//post a note
router.post('/notes', (req, res) => {
    req.body.id = uuid.v4();
    const note = createNewNote(req.body, notesArray);
    notesArray.push(req.body);
    res.json(note);
});

//delete a note
router.delete('/notes/:id', (req, res) => {
    let result = deleteNote(req.params.id, notesArray)
    if (!result) {
            res.send(404)
    }
    res.send(notesArray);
});

module.exports = router;
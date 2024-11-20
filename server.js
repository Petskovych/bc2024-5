const notes = {};

app.get('/notes/:name', (req, res) => {
  const noteName = req.params.name;
  if (!notes[noteName]) {
    return res.status(404).send('Not found');
  }
  res.send(notes[noteName]);
});

app.put('/notes/:name', express.text(), (req, res) => {
  const noteName = req.params.name;
  if (!notes[noteName]) {
    return res.status(404).send('Not found');
  }
  notes[noteName] = req.body;
  res.send('Note updated');
});

app.delete('/notes/:name', (req, res) => {
  const noteName = req.params.name;
  if (!notes[noteName]) {
    return res.status(404).send('Not found');
  }
  delete notes[noteName];
  res.send('Note deleted');
});

app.get('/notes', (req, res) => {
  const noteList = Object.keys(notes).map((name) => ({
    name,
    text: notes[name],
  }));
  res.json(noteList);
});

app.post('/write', express.urlencoded({ extended: true }), (req, res) => {
  const { note_name, note } = req.body;
  if (notes[note_name]) {
    return res.status(400).send('Note already exists');
  }
  notes[note_name] = note;
  res.status(201).send('Note created');
});

app.get('/UploadForm.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'UploadForm.html'));
});

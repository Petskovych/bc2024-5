const express = require('express'); // імпортуємо Express
const app = express(); // створюємо екземпляр Express

const port = process.env.PORT || 3000; // порт для сервера

app.use(express.urlencoded({ extended: true })); // для обробки даних з форм
app.use(express.json()); // для обробки JSON запитів

// Маршрут GET для отримання нотатки
app.get('/notes/:name', (req, res) => {
  const noteName = req.params.name;
  // Логіка для пошуку нотатки
  res.send(`Note: ${noteName}`);
});

// Маршрут PUT для оновлення нотатки
app.put('/notes/:name', (req, res) => {
  const noteName = req.params.name;
  const newText = req.body.text;
  // Логіка для оновлення нотатки
  res.send(`Updated note: ${noteName} with new text: ${newText}`);
});

// Маршрут DELETE для видалення нотатки
app.delete('/notes/:name', (req, res) => {
  const noteName = req.params.name;
  // Логіка для видалення нотатки
  res.send(`Deleted note: ${noteName}`);
});

// Маршрут для створення нової нотатки
app.post('/write', (req, res) => {
  const noteName = req.body.note_name;
  const noteText = req.body.note;
  // Логіка для створення нової нотатки
  res.status(201).send(`Created note: ${noteName}`);
});

// Маршрут для HTML форми
app.get('/UploadForm.html', (req, res) => {
  res.sendFile(__dirname + '/UploadForm.html');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

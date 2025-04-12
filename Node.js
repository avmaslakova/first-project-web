const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('public')); // папка для HTML, CSS, JS

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

const app = require('express')();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Package Manager!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
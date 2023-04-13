const express = require('express');
const PORT = 3001;
const app = express();

app.listen(PORT || 3001, () => {
  console.log('listening on 3001');
});

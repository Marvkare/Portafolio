const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

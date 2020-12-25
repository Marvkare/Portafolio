const express = require('express');
const path = require('path')
const app = express();
const exphbs = require('express-handlebars');



//settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

//base de datos 
app.use(require('./database.js'))

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extende: false}))

//routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/rememberthis.routes'))

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
app.use(express.static(path.join(__dirname,'public')));

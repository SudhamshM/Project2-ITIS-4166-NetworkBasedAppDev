// App for Project 2
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const eventRoutes = require('./routes/eventRoutes');
const mainRoutes = require('./routes/mainRoutes');



// create application
const app = express();

// configure app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

// mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'))

// set up routes
app.get('/', (req, res) =>
{
    res.render('index');
});

app.use('/', mainRoutes);
app.use('/events', eventRoutes)

// handling 404 errors
app.use((req, res, next) =>
{
    let error = new Error("The server cannot locate " + req.url);
    error.status = 404;
    next(error);
});

// handling all other errors
app.use((err, req, res, next) =>
{
    if (!err.status)
    {
        err.status = 500;
        err.message = ("Internal Server Error.");
    }
    console.log(err.stack);
    res.status(err.status);
    res.render('error', {error: err});
});

// start server
app.listen(port, host, () =>
{
    console.log('Server is running at port ', port);
})
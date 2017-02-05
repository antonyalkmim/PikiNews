'use strict';

const Routes = require('./routes.js');

module.exports = function Bootstrap(app){

    //Logs
    //==========================================
    app.use((req, res, next) => {
        console.log(req.method + " " + req.originalUrl);
        next();
    });

    //CORS
    //==========================================
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Access-Token,Access-Token,Keep-Alive,User-Agent,Content-Type, Authorization");
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Credentials", "true");
        if ('OPTIONS' === req.method) {
            res.sendStatus(200);
        } else {
            next();
        }
    });


    //Routes
    //==========================================
    app.use('/', Routes);

    //Errors
    //==========================================
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

};

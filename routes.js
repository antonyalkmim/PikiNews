'use strict';

const express = require('express');

const moment = require('moment');
moment.locale('pt_BR');

module.exports = function Routes(app){

    // No CACHE
    app.use(function (req, res, next) {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        next()
    });

    //Routes
    //==========================================

    //Index
    app.get('/', (req, res) => {
        const breakingNews = require('./stubs/breaking-news.json');
        const carouselNews = require('./stubs/carousel-news.json');
        const worldNews = require('./stubs/world-news.json');
        const sportNews = require('./stubs/sport-news.json');
        const mediaNews = require('./stubs/media-news.json');
        const techNews = require('./stubs/tech-news.json');


        res.render('index',  { carouselNews, breakingNews, worldNews, sportNews, mediaNews, techNews });
    });

    //Search
    app.get('/news/s/:term/:num_items?/:offset?', (req, res) => {

        let num_items = req.params.num_items || 15; //default num_items
        let offset = req.params.offset || 0; //default offset

        const news = require('./stubs/search-news.json').slice(offset, num_items);
        const breakingNews = require('./stubs/breaking-news.json');

        res.render('search', { moment, news, breakingNews });
    });

    //News Details
    app.get('/news/:id', (req, res) => {
        const news = require('./stubs/news-detail.json');
        const related = require('./stubs/news-detail-related.json');

        res.render('news-detail', { moment, news, related });
    });



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

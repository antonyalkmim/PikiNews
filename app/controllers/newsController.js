'use strict';

const moment = require('moment');
moment.locale('pt_BR');

//Get News
//========================================
exports.get = (req, res) => {
    let news = {
        uid 		: "noticia-cadastrada-pela-api",
        title 		: "Notícia cadastrada pela API",
        subtitle 	: "Primeira notícia cadastrada na Api como teste e será alterada posteriormente.",
        imageThumb 	: "http://s2.glbimg.com/UaEgn1Hynm-NUk6Sh44_JKgBJHM=/s.glbimg.com/og/rg/f/original/2016/09/02/brasil.jpg",
        content 	: "Primeira notícia cadastrada na Api como teste e será alterada posteriormente. Primeira notícia cadastrada na Api como teste e será alterada posteriormente. Primeira notícia cadastrada na Api como teste e será alterada posteriormente. Primeira notícia cadastrada na Api como teste e será alterada posteriormente. Primeira notícia cadastrada na Api como teste e será alterada posteriormente. Primeira notícia cadastrada na Api como teste e será alterada posteriormente. Primeira notícia cadastrada na Api como teste e será alterada posteriormente. Primeira notícia cadastrada na Api como teste e será alterada posteriormente. Primeira notícia cadastrada na Api como teste e será alterada posteriormente.",
        author      : "Antony Alkmim",
        createdAt  	: new Date(),
        updatedAt  	: new Date()
    };

    let related = [news, news, news];

    res.render('news-detail', { moment, news, related });
};


//Search News
//========================================
exports.search = (req, res) => {

    let num_items = req.params.num_items || 15; //default num_items
    let offset = req.params.offset || 0; //default offset

    //Search News
    //===============================
    let _news = {
        uid 		: "noticia-cadastrada-pela-api",
        title 		: "Notícia cadastrada pela API",
        subtitle 	: "Primeira notícia cadastrada na Api como teste e será alterada posteriormente.",
        imageThumb 	: "http://s2.glbimg.com/UaEgn1Hynm-NUk6Sh44_JKgBJHM=/s.glbimg.com/og/rg/f/original/2016/09/02/brasil.jpg",
        createdAt  	: new Date(),
        updatedAt  	: new Date()
    };

    var news = [];
    for(var i = 0; i < 20; i++){
        news.push(_news);
    }

    news = news.slice(offset, num_items);


    //BreakingNews News
    //===============================
    var breakingNews = [_news, _news, _news];



    //render
    res.render('search', { moment, news, breakingNews });
};




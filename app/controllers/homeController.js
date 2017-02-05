'use strict';

exports.index = (req, res) => {

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

    let carouselNews = [news, news, news];
    let breakingNews = [news, news, news, news];
    let worldNews = [news, news, news, news, news];
    let sportNews = [news, news, news, news, news];
    let mediaNews = [news, news, news, news, news];
    let techNews = [news, news, news, news];

    res.render('index',  { carouselNews, breakingNews, worldNews, sportNews, mediaNews, techNews });
};



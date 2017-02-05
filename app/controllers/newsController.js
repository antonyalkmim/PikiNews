'use strict';

//Get News
//========================================
exports.get = (req, res) => {
    let news = {
        uid 		: "noticia-cadastrada-pela-api",
        title 		: "Notícia cadastrada pela API",
        subtitle 	: "Primeira notícia cadastrada na Api como teste e será alterada posteriormente.",
        imageThumb 	: "http://s2.glbimg.com/UaEgn1Hynm-NUk6Sh44_JKgBJHM=/s.glbimg.com/og/rg/f/original/2016/09/02/brasil.jpg",
        createdAt  	: new Date(),
        updatedAt  	: new Date()
    };


    let locals = { news };

    res.render('news-detail', locals);
};


//Search News
//========================================
exports.search = (req, res) => {
    let news = {
        uid 		: "noticia-cadastrada-pela-api",
        title 		: "Notícia cadastrada pela API",
        subtitle 	: "Primeira notícia cadastrada na Api como teste e será alterada posteriormente.",
        imageThumb 	: "http://s2.glbimg.com/UaEgn1Hynm-NUk6Sh44_JKgBJHM=/s.glbimg.com/og/rg/f/original/2016/09/02/brasil.jpg",
        createdAt  	: new Date(),
        updatedAt  	: new Date()
    };

    var newsArr = [];
    for(var i = 0; i < 20; i++){
        newsArr.push(news);
    }

    let locals = {
        news : newsArr.slice(req.params.offset, 20)
    };

    res.render('search', locals);
};




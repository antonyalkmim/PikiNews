let mongoose = require('mongoose');

//USER
let newsSchema = require("./News.js");
exports.News = mongoose.model('news', newsSchema);


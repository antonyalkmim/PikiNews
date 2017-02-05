let mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    uid 		: { type: String },
    
    author 		: { type: String, required: true },

    title 		: { type: String, required: true },
    subtitle 	: { type: String, required: true },
    imageThumb 	: { type: String },
    content 	: { type: String, required: true },

	keywords 	: { type: String },    

    createdAt  	: { type : Date, default: Date.now },
    updatedAt  	: { type : Date, default: Date.now }
});


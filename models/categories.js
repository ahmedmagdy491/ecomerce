const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
	parentId: {
		type: mongoose.Schema.Types.ObjectId,
		default: null,
	},
	subId:{
		type: mongoose.Schema.Types.ObjectId,
		default: null,	
	},
	catName: {
		type: String,
	},
	subCatName:{
		type:String
	},
	brandName:{
		type:String
	}
});

module.exports = mongoose.model("categories", categorySchema);

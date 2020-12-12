const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
	parentId: {
		type: mongoose.Schema.Types.ObjectId,
		default: null,
	},
	
	subCatName: {
		type: String,
	}
});

module.exports = mongoose.model("subcategories", subcategorySchema);

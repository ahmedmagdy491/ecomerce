const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
	catName: {
		type: String,
	},
});

module.exports = mongoose.model("categories", categorySchema);

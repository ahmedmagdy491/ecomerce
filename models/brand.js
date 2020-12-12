const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
	
	subId: {
		type: mongoose.Schema.Types.ObjectId,
		default: null,
	},
	brandName: {
        type: String,
    }
	
});

module.exports = mongoose.model("brands", brandSchema);

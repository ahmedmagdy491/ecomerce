const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	brandId: {
		type: mongoose.Schema.Types.ObjectId,
		default: null,
	},
	productName: {
		type: String,
		required: [true, "This field is required"],
		minlength: [1, "Your Product Name should be more than 1 character"],
	},
	productDescription: {
		type: String,
		required: [true, "This field is required"],
		minlength: [150, "Your Description should be more than 150 characters"],
	},
	productPrice: {
		type: Number,
		required: [true, "this field is required"],
	},
	productImagePath: {
		type: String,
	},
});

module.exports = mongoose.model("products", productSchema);

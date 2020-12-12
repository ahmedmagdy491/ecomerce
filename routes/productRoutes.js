const router = require("express").Router();
const Product = require("../models/product");

router.post("/subcat/brand/product/:brandId", async (req, res) => {
	const { brandId } = req.params;
	const { productName } = req.body;
	const { productDescription } = req.body;
	const { productPrice } = req.body;
	const { productImagePath } = req.body;
	const newProduct = await new Product({
		brandId,
		productName,
		productDescription,
		productPrice,
		productImagePath,
	}).save();
	try {
		res.json(newProduct);
	} catch (err) {
		console.log(err);
	}
});

router.get("/subcat/brand/product/:brandId", (req, res) => {
	const { brandId } = req.params;

	Product.find({ brandId }, (err, products) => {
		if (err) {
			console.log(err);
		}
		res.json(products);
	});
});

module.exports = router;

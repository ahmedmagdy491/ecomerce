const router = require("express").Router();
const Category = require("../models/categories");

router.post("/subcat/:parentId", async (req, res) => {
	// const {parentId} = req.params
	const addSubcat = await new Category({
		parentId: req.params.parentId,
		subCatName: req.body.subCatName,
	}).save();

	try {
		res.json(addSubcat);
	} catch (err) {
		console.log(err);
	}
});




router.get("/subcat", async (req, res) => {
	const subcat = await Category.find({ parentId  });
	try {
		res.json(subcat);
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;

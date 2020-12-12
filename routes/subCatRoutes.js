const router = require("express").Router();
const SUB = require("../models/subCat");

router.post("/subcat/:parentId", async (req, res) => {
	const {parentId}  =  req.params;
	const {subCatName} = req.body
	const addSubcat = await new SUB({
		parentId,
		subCatName,
	}).save();

	try {
		res.json(addSubcat);
	} catch (err) {
		console.log(err);
	}
});

router.get("/subcat/:parentId", async (req, res) => {
	const {parentId} = req.params;
	const subcat = await SUB.find({ parentId });
	try {
		res.json(subcat);
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;

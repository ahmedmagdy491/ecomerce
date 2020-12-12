const router = require("express").Router();
const Brand = require("../models/brand");

router.post("/subcat/brand/:subId", async (req, res) => {
	const {subId} =  req.params;
	const {brandName} = req.body
	const NewBrand = await new Brand({
		subId,
		brandName
	}).save();

	try {
		res.json([NewBrand]);
	} catch (err) {
		console.log(err);
	}
});

router.get("/subcat/brand/:subId", async (req, res) => {
	const {subId} = req.params;
    const brands = await Brand.find( {subId});
    try {
        res.json(brands);
    } catch (err) {
        console.log(err);
    }
    
});

module.exports = router;

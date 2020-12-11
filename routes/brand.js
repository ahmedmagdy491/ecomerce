const router = require("express").Router();
const Category = require("../models/categories");

router.post("/subcat/brand/:subId", async (req, res) => {
	const NewBrand = await new Category({
		subId: req.params.subId,
		brandName: req.body.brandName,
	}).save();

	try {
		res.json([NewBrand]);
	} catch (err) {
		console.log(err);
	}
});

router.get("/subcat/brand", async (req, res) => {
    const Findbrands =  req.params.subId;
    const brands = await Category.find( {Findbrands},(Findbrands)=>{
        if(Findbrands != null){
            try {
                res.json(brands);
            } catch (err) {
                console.log(err);
            }
        }
    } );
    
});

module.exports = router;

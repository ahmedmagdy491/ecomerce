const express = require("express");
require("dotenv/config");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Category = require("./models/categories");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const subcatRoutes = require("./routes/subCatRoutes");
const brandRoutes = require("./routes/brandRoutes");
const productRoutes = require("./routes/productRoutes");
const ejs = require("ejs");

const app = express();

app.use(express.json());

// app.use(express.static('public'))
app.set("view engine", "ejs");

app.use(morgan("tiny"));

//Routes
app.use("/api", userRoutes);
app.use("/api", cartRoutes);
app.use("/api", subcatRoutes);
app.use("/api", brandRoutes);
app.use("/api", productRoutes);

app.post("/", async (req, res) => {
	const {catName} = req.body;
	const addCategory = await new Category({
		catName
	}).save();
	try {
		res.json(addCategory);
	} catch (err) {
		console.log(err);
	}
});

app.get("/", async (req, res) => {
	const categories = await Category.find({ parentId: null , subId:null , brandId:null,type_of_subCat_Id:null});
	try {
		res.json(categories);
	} catch (err) {
		console.log(err);
	}
});

mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.CONNECTION_URI,
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (!err) {
			console.log("MongoDB Connection Succeeded.");
		} else {
			console.log("Error in DB connection: " + err);
		}
	}
);

app.listen(process.env.PORT, () => {
	console.log("App listening on port", process.env.PORT);
});

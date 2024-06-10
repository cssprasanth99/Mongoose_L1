const connection = require("./db.js");
const express = require("express");
const GlassModel = require("./glass.model.js");
const ProductModel = require("./product.model.js");
const server = express();
server.use(express.json());

console.log(ProductModel);

server.get("/", (req, res) => {
  console.log("Hi");
  res.send("Hi");
});

//  glass model

server.post("/data", async (req, res) => {
  const { color, size, price, brand } = req.body;
  const glass = new GlassModel({
    color,
    size,
    price,
    brand,
  });
  await glass.save();
  res.send(`data recieved ${color} ${size} ${brand} ${price}`);
});

server.get("/getData", async (req, res) => {
  try {
    const filter = req.query;
    const data = await GlassModel.find(filter);
    res.status(200).send(data);
  } catch (error) {
    console.log("Data not found", error);
  }
});

server.patch("/updateData/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedData = await GlassModel.findByIdAndUpdate({ _id: id }, data);
    res.status(200).send(updatedData);
  } catch (error) {
    console.log("Data not found", error);
  }
});

server.delete("/deleteData/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGlass = await GlassModel.findByIdAndDelete({ _id: id });
    res.status(200).send(deletedGlass);
  } catch (error) {
    console.log("Data not found", error);
  }
});

// product model

server.post("/add-product", async (req, res) => {
  try {
    const { title, price, brand, quantity } = req.body;
    const product = new ProductModel({
      title,
      price,
      brand,
      quantity,
    });
    await product.save();
    res.status(200).send(`Data recevied ${product}`);
  } catch (error) {
    console.log("Data not found", error);
  }
});

server.get("/get-product", async (req, res) => {
  try {
    const filter = req.query;
    const data = await ProductModel.find(filter);
    res.status(200).send(data);
  } catch (error) {
    console.log("Data not found", error);
  }
});

server.patch("/update-product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedData = await ProductModel.findByIdAndUpdate({ _id: id }, data);
    res.status(200).send(updatedData);
  } catch (error) {
    console.log("Data not found", error);
  }

  server.delete("/delete-data/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedGlass = await GlassModel.findByIdAndDelete({ _id: id });
      res.status(200).send(deletedGlass);
    } catch (error) {
      console.log("Data not found", error);
    }
  });
});

server.listen(3000, async () => {
  try {
    await connection;
    console.log("server is ruuning on port 3000 and db is connected");
  } catch (err) {
    console.log(err);
  }
});

// server.get("/getData", async (req, res) => {
//     try {
//       const filter = req.query;
//       const data = await GlassModel.find(filter);
//       res.status(200).send(data);
//     } catch (error) {
//       console.log("Data not found", error);
//     }
//   });

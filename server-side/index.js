const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

// const uri = `mongodb://127.0.0.1:27017`;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fdrrfs0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // Database decl
    const craftDB = client.db("craftStore");
    const craftCollection = craftDB.collection("crafts");
    const categoriesCollection = craftDB.collection("categories");


    // my code goes here

    // add craft
    app.post('/addcraft', async(req, res)=>{
      const newCraft = req.body;
      console.log(newCraft);

      const result = await craftCollection.insertOne(newCraft);

      res.send(result)
    })

    // read craft all
    app.get('/allcrafts', async(req, res)=>{
      const cursor = craftCollection.find();
      const result = await cursor.toArray();
      
      res.send(result)
    })

    app.get('/craft/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await craftCollection.findOne(query);
      console.log(result)
      
      res.send(result)
    })

    app.get('/crafts/:useremail', async(req, res)=>{
      const userEmail = req.params.useremail;
      let query = {userEmail: userEmail};
      if(req.query.customization){
        query = {userEmail: userEmail, customization: req.query.customization};
      }
      
      const cursor = craftCollection.find(query);
      const result = await cursor.toArray();
      console.log(result)
      
      res.send(result)
    })

    app.get('/specific/:category', async(req, res)=>{
      const category = req.params.category;
      let query = {category: category};
      
      const cursor = craftCollection.find(query);
      const result = await cursor.toArray();
      console.log(result)
      
      res.send(result)
    })

    app.get('/subcategories', async(req, res)=>{
      const cursor = categoriesCollection.find();
      const result = await cursor.toArray();
      
      res.send(result)
    })

    // update craft
    app.put('/updatecraft/:id', async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const updateDoc = {
        $set: {
          craftName: req.body.craftName,
          category: req.body.category,
          stockStatus: req.body.stockStatus,
          processingTime: req.body.processingTime,
          craftPhotoURL: req.body.craftPhotoURL,
          shortDescription: req.body.shortDescription,
          price: req.body.price,
          rating: req.body.rating,
          customization: req.body.customization,
        }
      };
      const result = await craftCollection.updateOne(query, updateDoc, options)

      res.send(result);
    })

    // delete craft
    app.delete('/deletecraft/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await craftCollection.deleteOne(query);

      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res)=>{
    res.send('Alhamdulillah server is running.')
})

app.listen(port, ()=>{
    console.log(`Bismillah, server is running on port: ${port}`)
})
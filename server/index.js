const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")
const port = 5000
app.use(cors());
app.use(express.json());
const moment = require('moment');



app.post("/ad", async(req,res)=>{
  console.log(req.body)
  try {
    const { title, description, price, address,photopath ,category, username } = req.body;
   const postingDate = moment().format('MMMM D');
    const addProduct= await pool.query(" INSERT INTO products (title, description,price, address, photopath, category, username, posting_date) VALUES($1,$2,$3,$4,$5,$6,$7,$8)",
    [title,description,price,address, photopath, category, username, postingDate]);
    res.json(addProduct.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

// get all the products

app.get("/allproducts", async (req,res)=>{
  try {
    const all = await pool.query("SELECT * FROM products")
    res.json(all.rows)
  } catch (error) {
    console.error(error.message)
  }
})

//Get computer & laptop 

app.get("/computer&laptop", async(req,res)=>{
  try {
    const allProduct = await pool.query(" SELECT * FROM products WHERE category = $1",
    ["computer & laptop"]);
    res.json(allProduct.rows);

  } catch (error) {
    console.error(error.message)
  }
})

// GET SCOOTERS

app.get("/scooter", async (req,res)=>{
  try {
    const Scooter = await pool.query("SELECT * FROM products WHERE category = $1",
    ["Bikes"]);
    res.json(Scooter.rows);
  } catch (error) {
    console.error(error.message)
  }
})
// GET MOBILES
app.get("/mobile", async (req,res)=>{
  try {
    const Scooter = await pool.query("SELECT * FROM products WHERE category = $1",
    ["Mobiles"]);
    res.json(Scooter.rows);
  } catch (error) {
    console.error(error.message)
  }
})
//GET a Single Product for single product page

app.get("/product/:id", async(req,res)=>{
  try {
    const {id} = req.params;
    const aProduct = await pool.query(" SELECT * FROM products WHERE id=$1",[id])
    res.json(aProduct.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

// get a perticular users products for myads

app.get("/myads", async(req,res)=>{
  console.log(req.query)
  try {
    const {username} = req.query;
    const yourads = await pool.query("SELECT * FROM products WHERE username=$1",[username])
   res.json(yourads.rows);
  } catch (error) {
    console.error(error.message)
  }
})

// DELETE A PRODUCT 

app.delete("/remove/:id", async(req,res)=>{
  try {
    const {id} = req.params;
    const removeProduct = await pool.query("DELETE FROM products WHERE id=$1",[id])
    res.json("product was removed")
  } catch (error) {
    console.error(error.message)
  }
} )
// PUT UPDATE USER DETAILS

app.put('/editprofile/:id', async(req,res)=>{
  try {
    const {id} = req.params
    const {name, phoneNumber, email} = req.body
    console.log(req.body)
    const EditProfile = await pool.query("UPDATE users SET name=$1 , phone_number=$2 , email=$3 WHERE user_id=$4",
   [name, phoneNumber , email ,id] )
   res.json("Details were updated")
  } catch (error) {
    console.error(error.message)
  }
})
  // SEARCH PRODUCTS 

  app.get("/search", async (req,res)=>{
  
    try {
      const {searchedWord} = req.query
      console.log(req.query)
      const searchedItem = await pool.query(" SELECT * FROM products WHERE title ILIKE $1",[`%${searchedWord}%`])
      res.json(searchedItem.rows)
      //console.log(searchedItem.rows)
    } catch (error) {
      console.error(error.message)
    }
  })

//user login resgister user
app.post("/register", async(req,res)=>{
  try {
    const {email, phoneNumber, name, password}= req.body; 
   const existingUser = await pool.query("SELECT * FROM users WHERE email=$1",
   [email])
   if (existingUser.rows.length > 0){
    return res.status(400).json({error: "Email already registered withh another user"})
   }
   if(password.length < 8){
    return res.status(400).json({error:"the password must be alteast 8 characters long"})
   }
    const resgisterUser = await pool.query("INSERT INTO users (email, phone_number, name, password) VALUES($1,$2,$3,$4)",
    [email, phoneNumber, name, password]);
    res.json(resgisterUser.rows[0])
    console.log(resgisterUser.rows)
  } catch (error) {
    console.error(error.message)
  }
})

//user login Login a user
app.get("/login", async (req,res)=>{
  try {
    const Loginuser = await pool.query("SELECT * FROM users")
    res.json(Loginuser.rows)
  } catch (error) {
    console.error(error.message)
  }
})

app.listen(port, ()=>{console.log(`running on port ${port}`)})



import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";


const yourBearerToken = "3e0f1291-fd02-47f3-a9b4-4a3a8fd5e5f9";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.get("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req,res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.


  try{
    const result = await axios.post(API_URL + "/secrets", req.body ,config);
    res.render("index.ejs",{ content: JSON.stringify(result.data)});
  }catch(error){
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }


});

app.post("/put-secret", async (req,  res) => {
  const searchId = req.body.id;
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
  try{
    const result = await axios.put(API_URL + "/secrets/" + searchId , req.body , config)
    res.render("index.ejs",{ content: JSON.stringify(result.data)})
  }catch(error){
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }

});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;

  try{
    const result = await axios.patch(API_URL + "/secrets/" + searchId,req.body,config)
    res.render("index.ejs",{ content: JSON.stringify(result.data)})
  }catch(error){
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
 
  try{
    const result = await axios.delete(API_URL + "/secrets/" + searchId,config)
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch(error){
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "sourav9871";
const yourPassword = "viratkohli";
const yourAPIKey = "0f612d65-8c5b-4b15-b8fe-567972626abd";
const yourBearerToken = "3e0f1291-fd02-47f3-a9b4-4a3a8fd5e5f9";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try {
    const response = await axios.get(API_URL+"/random");
    res.render("index.ejs", { content: JSON.stringify(response.data)  });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async(req, res) => {

  try {
    const response = await axios.get(API_URL+"/all?page=2",{
      auth: {
        username: yourUsername,
        password: yourPassword
    }
    });
    res.render("index.ejs", { content: JSON.stringify(response.data)  });
  } catch (error) {
    res.status(404).send(error.message);
  }

});

app.get("/apiKey", async(req, res) => {
  try {
    const response = await axios.get(API_URL+"/filter?score=5",{
      params: {
        apiKey: yourAPIKey
    }
    });
    res.render("index.ejs", { content: JSON.stringify(response.data)  });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async(req, res) => {
  try {
    const response = await axios.get(API_URL+"/secrets/42",{
      headers: { Authorization: `Bearer ${yourBearerToken}` }
    });
    res.render("index.ejs", { content: JSON.stringify(response.data)  });
  } catch (error) {
    res.status(404).send(error.message);
  }
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

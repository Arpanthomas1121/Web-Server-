const express = require("express");
const path=require("path");  
const indexRoutes =require("./route.js");
const app = express();
const port = process.env.PORT || 3002;
app.set('views', path.join(__dirname,"views"));
app.set('view engine','ejs');
app.use(indexRoutes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

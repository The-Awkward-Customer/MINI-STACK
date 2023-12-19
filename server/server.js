import express from "express"; // import from node_modules

import cors from "cors"; // import cors from node_modules

const app = express(); // creates an instance of express in the const app

app.use(express.json()); // allows us to look at the json in the body of the request

app.use(cors()); //middleware
// middleware is like a bridhe between the client and the server

// end point
app.get("/message", function (request, response) {
  response.json({ message: "I am the message" });
});

//start the server
app.listen(8080, function () {
  console.log("server is listening to port 8080");
});

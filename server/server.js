const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const loginRouter = require('./routers/loginRouter.js');
const registerRouter = require('./routers/registerRouter.js');


app.use(express.json());
app.use(bodyParser);
app.use(cors());

app.use('/register', registerRouter);

app.use('/login', loginRouter);

// Global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: "Express error handler caught unknown middleware error",
      status: 400,
      message: { err: "An error occurred" },
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).send(errorObj.message);
  });

app.listen(3000, () =>{
    console.log("Server is listening on port 3000");
}) 
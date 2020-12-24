const express = require('express');
const mongoose = require("mongoose");
// const cors = require("cors");
// const passport = require("passport");
// const passportLocal = require("passport-local").Strategy;
// const cookieParser = require("cookie-parser");
// const bcrypt = require("bcryptjs");
// const session = require("express-session");
// const bodyParser = require("body-parser");
const Listmodel = require("./tasklist-model");
const List = require('./tasklist-model');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.agvtc.mongodb.net/testdb?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Mongoose connected");
    }
);

// Middlewares..............................................
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app we're connecting to
    credentials: true,
  })
);


// Routes...................................................
app.get("/list", (req, res) => {
    Listmodel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});
app.post("/list", async (req, res) => {
    const taskname = req.body.taskname;
    const id = req.body.id;
    const list = new Listmodel({taskname: taskname, id: id});

    try {
        await list.save();
        console.log("inserted data");
    } catch (err) {
        console.log(err);
    }
});
app.put("/list", async (req, res) => {
    const new_taskname = req.body.taskname;
    const _id = req.body._id;
    
    try {
        await List.findById(_id, (err, updatedTask) => {
            updatedTask.taskname = new_taskname;
            updatedTask.save();
            res.send("update");
        })
        console.log("updated data");
    } catch (err) {
        console.log(err);
    }
});

app.delete("/list/:id", async (req, res) => {
    const id = req.params.id;

    await List.findByIdAndRemove(id).exec();
    res.send(`Deleted ${id}`);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "todolist-client", "build", "index.html"));
});

// Start server.............................................
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`); 
})


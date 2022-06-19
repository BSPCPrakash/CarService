
const mongoose = require("mongoose");

const express = require("express");



// Create app instance
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const appointments = mongoose.Schema({
    customer_name:String,
    reason:String,
    vehicle:String
});

const myappointment = mongoose.model('Appointment',appointments);

app.post("/book",async(req,res)=>{
    try{

        console.log(req.body);
        const new1 = myappointment(req.body);
        await new1.save().then(()=>{console.log("Done ");
        res.status(200);
        res.preventDefault();
    }).error((e)=>{console.log(e);
        res.status(201);
    })
    }
    catch(e){
        console.log(e);
    }
      
        
});

const wash = mongoose.Schema({
    customer_name:String,
    date:Date
});

const washesDataModel = mongoose.model('washes',wash);

app.post("/wash",async(req,res)=>{
        console.log(req.body);
        const new1 = washesDataModel(req.body);
        await new1.save().then(()=>{console.log("Done ");
        res.status(200);
        res.preventDefault();
        }).error((e)=>{console.log(e);
            res.status(201);
});
});

const feedback = mongoose.Schema({
    name:String,
    mail:String,
    number:String,
    message:String
});

const feedbackModel = mongoose.model('feedbacks',feedback);

app.post("/feedback",async(req,res)=>{
    console.log(req.body);
    const new1 = feedbackModel(req.body);
    new1.save().then(()=>{console.log("Done ");
    res.status(200);
    res.preventDefault();
}).error((e)=>{console.log(e);
    res.status(201);

})
});



// Start up the server
mongoose.connect("mongodb+srv://saiprakash:9550948629@cluster0.hcqxn.mongodb.net/Users?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    app.listen(5000, ()=>{
        console.log("Server is running at the port ");
    });
  
})
.catch(error=>{
    console.log("error: ",error.message);
});

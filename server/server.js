const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());app.use(bodyParser.json());// MongoDB connection
mongoose.connect('mongodb+srv://adminblade:crH7apZ0zldkc4de@cluster0.rbqs4.mongodb.net/myreactdemo?retryWrites=true&w=majority&appName=Cluster0', {       
    useNewUrlParser: true,   
    useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));// Define API routes (example)

const User = require('./models/user');
app.get('/', (req, res) => {  
    res.send('Hello from the backend!');
});
app.get('/users', async (req, res) => { 
    try {    
        const users = await User.find();    
        res.json(users);  
    } catch (err) {    
        res.status(500).json({ error: err.message });  
    }
});
app.post('/newuser', async (req, res) => {
    try{
        const user = new User(req.body)
        console.log(user);
        await user.save();
        res.send("OK")
    } catch(error) {
        res.status(500).json({ error: error.message });  
    }
})
app.listen(port, () => {  
    console.log(`Server is running on port ${port}`);
});
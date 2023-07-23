const userdata=require('../models/users')

const getData= async (req,res)=>{
        try{
            const display=await userdata.find();
          res.send(display)
          console.log("home is live now")
        }
        catch(error){
            console.log(error)
        }
}

const products = async (req, res) => {
    try {

        const data = new userdata({
            ...req.body
        });

        await data.save();

        res.status(200).json({ data });

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "internal server error", error });
    }
}

module.exports={getData, products}
const User = require('../model/userSchema')


const findUser = async (req,res) =>{

try{

    res.status(200).json(await User.findOne({name:req.params.name}))

    
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"});
    }
    
}

const insertUser = async (req,res,next)=>{

    var user = new User({
        name:req.body.name,
        password:req.body.password
    })

User.findOne({name:req.body.name},(err,findObj)=>{

console.log(req.body.name)

    if(err){
        return res.send(err)
    }

    if(findObj !== null){
        return res.send({
            msg: 'User Exist '
          });
    }

else {
    user.save((err,user)=>{

        if(err){ 
            return next(err)
        }
      
        res.status(200).json({name:user.name,password:user.password})
       
    })
}

})


   

}


const saveUserPassword =(req,res)=>{
  

   User.findOne({name:req.params.name},(err,findObj)=>{

    
    if(err){
        return res.send(err)
    }

    if(findObj === null){
        return res.send({
            msg: 'No matching user with name '
          });
    }

      findObj.password= req.body.password
      findObj.save(err => {
        if (err) {
  
          res.send(err);
        }
        res.json({message: 'Updated ',findObj});
      });

    })

}

 
module.exports={
    insertUser,
    findUser,
    saveUserPassword
}
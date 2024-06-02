const users=require('../Modals/userSchema')
const jwt=require('jsonwebtoken')
const jwtsecret=process.env.JWTSECRET
// register

exports.registerController=async(req,res)=>{
    const{username,email,password}=req.body
    try{
        const userDetails=await users.findOne({email})
        if(userDetails){
res.status(406).json('user already exist')
        }else{
const newUser=new users({
    username,email,password
})
await newUser.save()
res.status(200).json(newUser)
        }

    }catch(err){
res.status(401).json(err)
    }
}

// login

exports.loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const existingUser = await users.findOne({ email });

        if (existingUser) {
            // Verify the password
            if (existingUser.password === password) {  
                const token = jwt.sign({ userId: existingUser._id }, jwtsecret);
                return res.status(200).json({ user: existingUser, token });
            } else {
                return res.status(406).json('Incorrect email or password');
            }
        } else {
            return res.status(406).json('Incorrect email or password');
        }
    } catch (err) {
        return res.status(500).json({ message: 'An error occurred while processing your request' });
    }
};


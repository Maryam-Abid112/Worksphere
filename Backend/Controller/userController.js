
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


// generating the JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};




exports.registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    // checking user exists
    try {
        const userexist = await User.findOne({ email });
        if (userexist) {
            return res.status(400).json({ message: "User already exists" });
        }
        // creating a doc inside user collection everytime a person sign up
        const passwordRegex = /^(?=.*[!@#$%^&*])/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                message: "Password must contain at least one special character (!@#$%^&*)"
            });
        }
        const user = await User.create({ name, email, password, role });
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });

    } catch (error) {
        res.status(500).json({ message: error.message });

    }

};



// Login placeholder
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (user && isMatch) {
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }


    } catch (error) {
        res.status(500).json({ message: error.message })

    }

};
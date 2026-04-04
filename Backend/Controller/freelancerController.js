const Freelancer = require("../Models/Freelancer");
// Create or Update Freelancer Profile
const upsertFreelancerProfile = async (req, res) => {
    try{
        const { skills, bio, portfolio, hourlyRate, availability } = req.body;
        let freelancer = await Freelancer.findOne({user: req.user._id});
        if(freelancer){
            //Update Existing profile
            freelancer.skills = skills || freelancer.skills;
            freelancer.bio = bio || freelancer.bio;
            freelancer.portfolio = portfolio || freelancer.portfolio;
            freelancer.hourlyRate = hourlyRate || freelancer.hourlyRate;
            freelancer.availability = availability !== undefined ? availabiliy: freelancer.availability;

            await freelancer.save();
            return res.json(freelancer);
        } else{
            // Create new profile
            freelancer = await Freelancer.create({
                user: req.user._id,
                skills,
                bio,
                portfolio,
                hourlyRate,
                availability
            });
            return res.status(201).json(freelancer);
        }
    } catch (error){
        res.status(500).json({message: error.nessage});
    }
};

// Get Freelancer Profile by Id
const getFreelancerProfile = async(req, res) =>{
    try{
        const freelancer = await Freelancer.findOne({user: req.user._id}).populate("user", "name email");
        if(!freelancer){
            return res.status(404).json({message: "Freelancer profile not found"});
            res.json(freelancer);
        }
    }catch (error){
        res.status(500).json({message: error.message});
    }
};

// Get All Freelancers
const getAllFreelancers = async(req, res) => {
    try{
        const freelancers = await Freelancer.find().populate("user", "name email");
        res.status(200).json(freelancers);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
// Get Freelancer by Skill
const getFreelancerBySkill = async(req, res) =>{
    try{
        const {skill} = req.body;
        const freelancers = await Freelancer.find({skills: { $regex: skill, $options: "i"}}).populate("user", "name email");
        if(freelancers.length==0){
            return res.status(404).json({message: "No Freelancers found with this skill"});
        }
        res.json(freelancers);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    upsertFreelancerProfile,
    getFreelancerProfile,
    getAllFreelancers,
    getFreelancerBySkill,
};
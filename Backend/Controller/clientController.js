const Client = require("../Models/Client");

// Create or Update Client Profile
const upsertClientProfile = async (req, res) => {
  try {
    const { company, website, description, budgetRange } = req.body;

    let client = await Client.findOne({ user: req.user._id });

    if (client) {
      // Update existing profile
      client.company = company || client.company;
      client.website = website || client.website;
      client.description = description || client.description;
      client.budgetRange = budgetRange || client.budgetRange;

      await client.save();
      return res.json(client);
    } else {
      // Create new profile
      client = await Client.create({
        user: req.user._id,
        company,
        website,
        description,
        budgetRange,
      });

      return res.status(201).json(client);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get client profile
const getClientProfile = async (req, res) => {
  try {
    const client = await Client.findOne({ user: req.user._id })
      .populate("user", "name email");

    if (!client) {
      return res.status(404).json({ message: "Client profile not found" });
    }

    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  upsertClientProfile,
  getClientProfile,
};
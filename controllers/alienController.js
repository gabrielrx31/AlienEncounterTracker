const alien = require('../models/alien');

exports.createAlien = async(req, res) => {
    try {
        const data = req.body;
        const createdAlien = await new alien(data).save();
        res.json(createdAlien);
    } catch (err) {
        res.status(500).json({ message: 'Error creating new alien', error: err.message });
    }
};

exports.getAllAliens = async(req, res) => {
    try {
        const aliens = await alien.find({});
        res.json(aliens);
    } catch (err) {
        res.status(500).json({ message: 'Error getting all aliens', error: err.message });
    }
};

exports.getAlienById = async (req, res) => {
    try {
        const foundAlien = await alien.findById(req.params.id);
        if (!foundAlien) {
            return res.status(404).json({ message: 'Alien not found' });
        }
        res.json(foundAlien);
    } catch (err) {
        res.status(500).json({ message: 'Error getting alien', error: err.message });
    }
};

exports.updateAlien = async(req, res) => {
    try {
        const updatedAlien = await alien.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedAlien) {
            return res.status(404).json({ message: 'Alien not found'});
        }
        res.json(updatedAlien);
    } catch (err) {
        res.status(500).json({ message: 'Error updating alien', error: err.message });
    }
};

exports.deleteAlien = async(req, res) => {
    try {
        const deletedAlien = await alien.findByIdAndDelete(req.params.id);
        if (!deletedAlien) {
            return res.status(404).json({ message: 'Alien not found' });
        }
        res.json(deletedAlien);
    } catch (err) {
        res.status(500).json({ message: 'Error deleting alien', error: err.message });
    }
};
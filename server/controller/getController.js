const PanelOne = require('../models/panelOneModel');
const PanelTwo = require('../models/panelTwoModel');
const PanelThree = require('../models/panelThreeModel');
const PanelFour = require('../models/panelFourModel');

// Define a single function to handle all panel names
const getPanelData = async (req, res) => {
    const panelName = req.params.panelName;
    try {
        let panelData;
        if (panelName in PanelOne.schema.paths) {
            panelData = await PanelOne.findOne({}, { [panelName]: 1 });
        } else if (panelName in PanelTwo.schema.paths) {
            panelData = await PanelTwo.findOne({}, { [panelName]: 1 });
        } else if (panelName in PanelThree.schema.paths) {
            panelData = await PanelThree.findOne({}, { [panelName]: 1 });
        } else if (panelName in PanelFour.schema.paths) {
            panelData = await PanelFour.findOne({}, { [panelName]: 1 });
        } else {
            return res.status(404).send('Panel not found');
        }

        if (!panelData) {
            return res.status(404).send('Panel not found');
        }
        res.json(panelData);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { getPanelData };

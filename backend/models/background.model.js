const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const backgroundSchema = new Schema({
    name: String,
    description: String,
    proficiencies: {
        skills: [String],
        tools: [String],
        languages: Number,
        vehicles: [String]
    },
    equipment: [String],
    gold: String,
    feature: {
        name: String,
        description: String
    },
    suggestedCharacteristics: String,
    personality: [String],
    ideals: {
        name: String,
        description: String
    },
    bonds: [String],
    flaws: [String],
    extraTables: Schema.Types.Mixed,
    variants: {
        name: String,
        description: String
    }
}, {
    timestamps: true,
});

const Background = mongoose.model('Background', backgroundSchema);

module.exports = Background;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name: String,
    value: { type: Number, default: 0 },
    isProficient: {type: Boolean, default: false },
    relevantStat: String
}, {
    timestamps: true,
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
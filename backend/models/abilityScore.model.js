const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const abilityScoreSchema = new Schema({
    name: String,
    acronym: String,
    value: Number,
    modifier: Number
}, {
    timestamps: true,
});

const AbilityScore = mongoose.model('AbilityScore', abilityScoreSchema);

module.exports = AbilityScore;
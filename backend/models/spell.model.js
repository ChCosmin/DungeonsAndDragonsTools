const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spellsSchema = new Schema({
    name: String,
    level: { type: Number, min: 0, max: 9 },
    school: String,
    isRitual: { type: Boolean, defualt: false },
    castingTime: String,
    range: String,
    components: String,
    duration: String, 
    description: String,
    atHigherLevels: String,
    extra: String
}, {
    timestamps: true,
});

const Spell = mongoose.model('Spell', spellsSchema);

module.exports = Spell;
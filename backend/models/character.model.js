const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    characterName: String,
    playerName: String,
    avatarUrl: String,
    level: Number,
    race: String,
    subrace: String,
    class: String,
    alignment: String,
    background: String,
    experience: Number,
    abilityScores: {
        name: String,
        value: Number,
        modifier: Number
    },
    saveThrows: {
        name: String,
        value: Number,
        isProficient: { type: Boolean, default: false }
    },
    proficiencyBonus: Number,
    passivePerception: Number,
    skills: {
        name: String,
        value: Number,
        isProficient: { type: Boolean, default: false }
    },
    ac: Number,
    init: Number,
    speed: Number,
    hpMax: Number,
    hitDice: String, 
    equipment: [String],
    personality: String,
    ideals: String,
    bonds: String,
    flaws: String,
    proficiencies: {
        tools: [String],
        languages: [String],
        weapons: [String],
        armors: [String],
        vechicles: [String]
    },
    featuresAndTrais: Schema.Types.Mixed,
    aspect: {
        eyes: String,
        hair: String,
        skin: String,
        height: String,
        weight: String,
        age: String
    },
    alliesAndOrganizations: {
        name: String,
        description: String,
        imageUrl: String
    },
    backstory: String,
    treasure: String,
    magic: {
        spellcastingAbility: String,
        spellSaveDC: Number,
        spellAttack: Number,
        cantrips: { number: Number, spells: [String] },
        lvl1: { slots: Number, spells: [String] },
        lvl2: { slots: Number, spells: [String] },
        lvl3: { slots: Number, spells: [String] },
        lvl4: { slots: Number, spells: [String] },
        lvl5: { slots: Number, spells: [String] },
        lvl6: { slots: Number, spells: [String] },
        lvl7: { slots: Number, spells: [String] },
        lvl8: { slots: Number, spells: [String] },
        lvl9: { slots: Number, spells: [String] },        
    }
}, {
    timestamps: true,
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
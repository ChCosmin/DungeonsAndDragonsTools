const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featSchema = new Schema({
    name: String,
    modifiers: Schema.Types.Mixed,
    prerequisite: Schema.Types.Mixed,
    description: String,
    list: [String]
}, {
    timestamps: true,
});

const Feat = mongoose.model('Feat', featSchema);

module.exports = Feat;
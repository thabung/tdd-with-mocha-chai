var mongoose = require('mongoose'),
        Schema = mongoose.Schema;
//player schema definition
let PlayerSchema = new Schema(
        {
            name: {type: String, required: true},
            club: {type: String, required: true},
            number: {type: Number, required: true},
            createdAt: {type: Date, default: Date.now}
        },
        {
            versionKey: false
        }
);


// Sets the createdAt parameter equal to the current time
PlayerSchema.pre('save', next => {
    now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

//Exports the PlayerSchema for use elsewhere.
module.exports = mongoose.model('player', PlayerSchema);
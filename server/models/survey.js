var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SurveySchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

SurveySchema.path('title').validate(function(title) {
    return title && title.length;
}, 'Title cannot be blank');

SurveySchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);
    }
};

mongoose.model('Survey', SurveySchema);
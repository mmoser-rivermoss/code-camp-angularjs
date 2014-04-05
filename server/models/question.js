var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AvailableAnswerSchema = new Schema({
    title: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

var QuestionSchema = new Schema({
    title: {
        type: String,
        default: '',
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    survey:{
        type: Schema.ObjectId,
        ref: 'Survey'
    },
    answers: [AvailableAnswerSchema],
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

QuestionSchema.path('title').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');

mongoose.model('Question', QuestionSchema);
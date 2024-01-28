const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
model: {
    
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        default:""
      },
      isDone: {
        type: Boolean,
        default: false,
      },
    },
  
});

const Questions = mongoose.model("Question", QuestionSchema);

module.exports = Questions;

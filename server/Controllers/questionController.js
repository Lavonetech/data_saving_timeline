const Questions = require("../Model/Question");

const createQuestion = async (req, res) => {
  try {
    const { question } = req.body;
    const newQuestion = new Questions({
      model: {
        question: question,
      },
    });

    const savedQuestion = await newQuestion.save();

    if (!savedQuestion) {
      return res.status(500).json({ message: "Failed to save question" });
    }

    res.status(200).json({
      message: "Question saved successfully",
      question: savedQuestion,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "500 Internal Server Error" });
  }
};

const createAnswer = async (req, res) => {
  try {
    const { answer } = req.body;
    const { questionId } = req.params;

    const question = await Questions.findById(questionId);

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    } else {
      // Update the answer and isDone properties in the model field

      if (answer.length > 1) {
        question.model.answer = answer;
        question.model.isDone = true;

        // Save the updated question document
        const savedQuestion = await question.save();

        if (savedQuestion) {
          res.status(200).json({
            message: "Answer saved successfully",
            question: savedQuestion,
          });
        } else {
          res.status(400).json({ message: "Answer not saved" });
        }
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createQuestion, createAnswer };

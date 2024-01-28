const express=require("express");
const { createQuestion, createAnswer } = require("../Controllers/questionController");

const router=express.Router();

router.post('/createquestion',createQuestion);
router.post('/questions/:questionId',createAnswer);

module.exports=router
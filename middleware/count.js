const { Categories ,Question } = require('../config/db');

async function findQuiz(req, res, next) {
  const Categories_id = req.params.id;
  console.log("id day", quiz_id);
  const categories = await Categories.findByPk(Categories_id, {
    include: {
      model: Question,
      where: { categoriesId: categories_id },
      required: false
    }
  });
  if (!categories) {
    return res.status(400).send('Invalid Quiz');
  }
  req.categories = categories;
  next();
}

function getScore(req, res, next) {
  let answers = {};
  let count = 0;
  let correct = 0;  
    req.categories.questions.forEach((question) => {
      count++;
      answers[question.id] = question.answer;
    });
    
    req.body.answers.forEach((answer) => {
      if (answer.answer === answers[answer.question_id]) {
        answer.correct = true;
        correct++;
      } else {
        answer.correct = false;
      }
    });

    const score = correct/count;

    req.score = score;
    next();
  }
  module.exports = {getScore,findQuiz};
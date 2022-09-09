const { Sequelize } = require('sequelize');

const UserModel = require('../models/user');
const ScoreModel = require('../models/score');
const AnswerModel = require('../models/answer');
const CategoriesModel = require('../models/categories');
const QuestionModel = require('../models/question');

const sequelize = new Sequelize('mock_1', process.env.NAME, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const User = UserModel(sequelize, Sequelize);
const Score = ScoreModel(sequelize, Sequelize);
const Answer = AnswerModel(sequelize, Sequelize);
const Categories = CategoriesModel(sequelize, Sequelize);
const Question = QuestionModel(sequelize, Sequelize);

User.hasMany(UserQuiz);
Categories.hasMany(Score);
Categories.hasMany(Question);
Score.hasMany(Answer);
Question.hasMany(Answer);

sequelize.sync().then(() => {
    console.log("Database and tables created");
});

module.exports = {
    sequelize,
    User,
    Question,
    Categories,
    Score,
    Answer,

};